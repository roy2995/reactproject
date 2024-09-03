import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import logo from '../assets/logo.jpg';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:4000/api/Users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok && data.accessToken) {
                console.log('Login success:', data);

                // Guardar el accessToken, refreshToken y el rol en localStorage
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('role', data.role);

                // Redirigir según el rol del usuario
                const role = data.role;

                if (role === 'admin') {
                    navigate('/dashboard');
                } else if (role === 'user') {
                    navigate('/homeUser');
                } else {
                    console.log('No tienes los permisos necesarios para acceder a esta área.');
                }
            } else {
                setError(data.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            setLoading(false);
            setError('Error de conexión. Inténtalo de nuevo.');
            console.error('Connection error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="w-24 h-24" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center">
                        <User className="text-gray-700 mr-2" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6 flex items-center">
                        <Lock className="text-gray-700 mr-2" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        disabled={loading}
                    >
                        {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
