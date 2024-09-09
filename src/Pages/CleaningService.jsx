// src/Pages/CleaningService.jsx
import React, { useState } from 'react';
import Header from '../Components/Header';
import TaskList from '../Components/TaskList';
import ContingencyList from '../Components/ContingencyList';
import ProgressBar from '../Components/ProgressBar';
import FileUpload from '../Components/FileUpload';
import taskOptions from '../Data/taskOptions';  // Importando tareas
import contingencyOptions from '../Data/contingencyOptions';  // Importando contingencias

const CleaningService = () => {
    const [tasks, setTasks] = useState([]);
    const [beforePhoto, setBeforePhoto] = useState(null);
    const [afterPhoto, setAfterPhoto] = useState(null);
    const [contingencies, setContingencies] = useState([]);
    const [assignedArea, setAssignedArea] = useState("");

    const completedTasks = tasks.filter((task) => task.completed).length;
    const progress = Math.round((completedTasks / tasks.length) * 100);

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (type === "before") {
            setBeforePhoto(URL.createObjectURL(file));
        } else {
            setAfterPhoto(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado", tasks, beforePhoto, afterPhoto, contingencies, assignedArea);
    };

    const handleTaskChange = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleContingencyChange = (index) => {
        const newContingencies = [...contingencies];
        newContingencies[index].completed = !newContingencies[index].completed;
        setContingencies(newContingencies);
    };

    const handleAreaChange = (e) => {
        const selectedArea = e.target.value;
        setAssignedArea(selectedArea);

        const newTasks = (taskOptions[selectedArea] || []).map((task) => ({
            name: task,
            completed: false,
        }));
        setTasks(newTasks);

        const newContingencies = (contingencyOptions[selectedArea] || []).map((contingency) => ({
            name: contingency,
            completed: false,
        }));
        setContingencies(newContingencies);
    };

    return (
        <>
            <Header role="user" />
            <div className="container mx-auto p-8 bg-white shadow-xl rounded-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Envío del Servicio de Limpieza</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Dropdown para área */}
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

                    {/* Componente de subida de fotos */}
                    <FileUpload 
                        beforePhoto={beforePhoto}
                        afterPhoto={afterPhoto}
                        handleFileChange={handleFileChange}
                    />

                    {/* Lista de Verificación */}
                    <TaskList tasks={tasks} handleTaskChange={handleTaskChange} />

                    {/* Lista de Contingencias */}
                    <ContingencyList contingencies={contingencies} handleContingencyChange={handleContingencyChange} />

                    {/* Barra de Progreso */}
                    <ProgressBar progress={progress} completedTasks={completedTasks} totalTasks={tasks.length} />

                    {/* Botón de submit */}
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );
};

export default CleaningService;
