import React, { useState } from 'react';

const CleaningService = () => {
    // Mapeo de las tareas por área asignada
    const taskOptions = {
        lobby: ["Barrer", "Trapear", "Desinfectar artefactos", "Limpieza de paredes", "Reposición de insumos"],
        cocina: ["Barrer", "Trapear", "Desinfectar artefactos", "Limpieza profunda", "Desinfección de superficies"],
        baños: ["Desinfección de artefactos sanitarios", "Reposición de insumos", "Limpieza de espejos", "Limpieza de paredes"],
        oficinas: ["Barrer", "Trapear", "Limpiar escritorios", "Vaciar Basura", "Pulir Accesorios"],
        terminal1_areas_publicas: ["Limpieza de pisos", "Desinfección de artefactos sanitarios", "Limpieza de paredes", "Reposición de insumos"],
        estacionamientos: ["Barrido de aceras", "Recolección de basura", "Limpieza de áreas de pago"],
        plataforma: ["Barrido de aceras", "Limpieza de baños", "Limpieza de garitas"],
    };

    const contingencyOptions = {
        lobby: ["Baldosas rotas", "Goteras", "Vidrios rotos"],
        cocina: ["Tubería rota", "Problemas eléctricos", "Goteras"],
        baños: ["Inodoros dañados", "Fugas de agua", "Problemas de desagüe"],
        oficinas: ["Problemas eléctricos", "Fugas de agua", "Vidrios rotos"],
        terminal1_areas_publicas: ["Baldosas rotas", "Vidrios rotos", "Problemas eléctricos"],
        estacionamientos: ["Tubería rota", "Daños en rampas", "Problemas eléctricos"],
        plataforma: ["Daños en rampas", "Problemas eléctricos", "Goteras"],
    };

    const [tasks, setTasks] = useState([]);
    const [beforePhoto, setbeforePhoto] = useState(null);
    const [afterPhoto, setAfterPhoto] = useState(null);
    const [contingency, setContingency] = useState("");
    const [assignedArea, setAssignedArea] = useState("");

    const completedTasks = tasks.filter((task) => task.completed).length;
    const progress = Math.round((completedTasks / tasks.length) * 100);

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (type === "before") {
            setbeforePhoto(URL.createObjectURL(file));
        } else {
            setAfterPhoto(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado", tasks, beforePhoto, afterPhoto, contingency, assignedArea);
    };

    const handleTaskChange = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleAreaChange = (e) => {
        const selectedArea = e.target.value;
        setAssignedArea(selectedArea);

        // Cambiar las tareas según el área asignada
        const newTasks = (taskOptions[selectedArea] || []).map((task) => ({
            name: task,
            completed: false,
        }));
        setTasks(newTasks);

        // Cambiar las contingencias según el área asignada
        setContingency("");
    };

    return (
        <div className="container mx-auto p-8 bg-white shadow-xl rounded-lg">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Envío del Servicio de Limpieza</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dropdown para asignar área */}
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Área Asignada</label>
                    <select
                        value={assignedArea}
                        onChange={handleAreaChange}
                        className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Seleccione el área</option>
                        <option value="lobby">Lobby</option>
                        <option value="cocina">Cocina</option>
                        <option value="baños">Baños</option>
                        <option value="oficinas">Oficinas</option>
                        <option value="terminal1_areas_publicas">Terminal 1 - Áreas Públicas</option>
                        <option value="estacionamientos">Estacionamientos</option>
                        <option value="plataforma">Terminal 1 - Área de Plataforma</option>
                    </select>
                </div>

                {/* Fotos de antes y después */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Foto Previa a la Tarea</label>
                        {beforePhoto ? (
                            <img src={beforePhoto} alt="Foto Previa" className="w-full h-auto border-2 border-gray-300 rounded-lg shadow-lg" />
                        ) : (
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(e, 'before')}
                                className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    </div>

                    <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Foto Final de la Tarea</label>
                        {afterPhoto ? (
                            <img src={afterPhoto} alt="Foto Final" className="w-full h-auto border-2 border-gray-300 rounded-lg shadow-lg" />
                        ) : (
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(e, 'after')}
                                className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    </div>
                </div>

                {/* Lista de verificación de limpieza */}
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Lista de Verificación de Limpieza</label>
                    {tasks.map((task, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleTaskChange(index)}
                                className="mr-3 h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500 border-2 border-gray-300 rounded-full"
                            />
                            <label className="text-gray-700 text-lg">{task.name}</label>
                        </div>
                    ))}
                </div>

                {/* Contingencia */}
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Contingencia</label>
                    <select
                        value={contingency}
                        onChange={(e) => setContingency(e.target.value)}
                        className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Seleccione la contingencia</option>
                        {(contingencyOptions[assignedArea] || []).map((contingencyItem, index) => (
                            <option key={index} value={contingencyItem}>
                                {contingencyItem}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Barra de progreso */}
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Progreso</label>
                    <progress value={progress} max="100" className="w-full h-5 text-blue-500"></progress>
                    <p className="text-gray-600 text-sm mt-2">{completedTasks} de {tasks.length} tareas completadas</p>
                </div>

                {/* Botón de submit */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default CleaningService;