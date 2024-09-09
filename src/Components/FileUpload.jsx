import React, { useRef, useState } from 'react';

const FileUpload = ({ beforePhoto, afterPhoto, handleFileChange }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Estado para detectar si es móvil

    // Detectar si el dispositivo es móvil
    const checkIfMobile = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Detecta si es un dispositivo móvil
        if (/android|iPad|iPhone/i.test(userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // Función para abrir la cámara (solo en escritorio)
    const openCamera = async () => {
        setIsCapturing(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (err) {
            console.error("Error al acceder a la cámara", err);
        }
    };

    // Función para capturar la imagen del video
    const capturePhoto = (type) => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Definir el tamaño del canvas para coincidir con el video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Dibujar el frame actual del video en el canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Obtener la URL de la imagen desde el canvas
        const imageUrl = canvas.toDataURL('image/png');

        // Enviar la imagen como si fuera el archivo cargado
        handleFileChange(imageUrl, type);

        // Detener la captura después de tomar la foto
        stopCamera();
    };

    // Detener la cámara
    const stopCamera = () => {
        const video = videoRef.current;
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
        video.srcObject = null;
        setIsCapturing(false);
    };

    // Abre el file picker (para dispositivos móviles)
    const handleMobileFileChange = (e, type) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        handleFileChange(imageUrl, type);
    };

    // Detectar si es un dispositivo móvil al montar el componente
    React.useEffect(() => {
        checkIfMobile();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-6">
            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Foto Previa a la Tarea</label>
                {beforePhoto ? (
                    <img src={beforePhoto} alt="Foto Previa" className="w-full h-auto border-2 border-gray-300 rounded-lg shadow-lg" />
                ) : (
                    <div>
                        {isCapturing ? (
                            <>
                                <video ref={videoRef} autoPlay className="w-full h-auto border-2 border-gray-300 rounded-lg shadow-lg" />
                                <button onClick={() => capturePhoto('before')} className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                                    Capturar Foto
                                </button>
                            </>
                        ) : (
                            <>
                                {isMobile ? (
                                    <>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            capture="environment"
                                            onChange={(e) => handleMobileFileChange(e, 'before')}
                                            className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </>
                                ) : (
                                    <button onClick={openCamera} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                                        Abrir Cámara
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Foto Final de la Tarea</label>
                {afterPhoto ? (
                    <img src={afterPhoto} alt="Foto Final" className="w-full h-auto border-2 border-gray-300 rounded-lg shadow-lg" />
                ) : (
                    <div>
                        {isCapturing ? (
                            <>
                                <video ref={videoRef} autoPlay className="w-full h-auto border-2 border-gray-300 rounded-lg shadow-lg" />
                                <button onClick={() => capturePhoto('after')} className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                                    Capturar Foto
                                </button>
                            </>
                        ) : (
                            <>
                                {isMobile ? (
                                    <>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            capture="environment"
                                            onChange={(e) => handleMobileFileChange(e, 'after')}
                                            className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </>
                                ) : (
                                    <button onClick={openCamera} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                                        Abrir Cámara
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>

            {/* Canvas hidden para capturar la imagen */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default FileUpload;
