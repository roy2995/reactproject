import React, { useState, useRef } from 'react';

const UserFormComponent = ({ userName, dateTime }) => {
  const [showCamera, setShowCamera] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCameraClick = () => {
    setShowCamera(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error("Error accessing camera: ", err);
      });
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    setImageSrc(canvasRef.current.toDataURL('image/png'));
    stopCamera();
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    videoRef.current.srcObject = null;
    setShowCamera(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="relative">
          {imageSrc ? (
            <img src={imageSrc} alt="Captured" className="rounded-full w-32 h-32 mx-auto mb-4" />
          ) : (
            <div className="bg-gray-700 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-6xl">+</span>
            </div>
          )}
          <button 
            className="absolute right-4 bottom-4 bg-blue-500 p-2 rounded-full"
            onClick={handleCameraClick}
          >
            <i className="text-white text-lg fas fa-camera"></i>
          </button>
        </div>
        <h2 className="text-xl font-bold mb-2">Bienvenido, {userName}</h2>
        <p>{dateTime}</p>
        <form className="mt-6">
          <label className="block mb-2 text-sm">Imagen</label>
          <input 
            type="file" 
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
          <button 
            type="submit" 
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Finalizar turno
          </button>
        </form>
      </div>

      {/* Modal or inline camera view */}
      {showCamera && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <video ref={videoRef} className="rounded-md mb-4" style={{ width: '320px', height: '240px' }}></video>
            <canvas ref={canvasRef} style={{ display: 'none' }} width="320" height="240"></canvas>
            <div className="flex justify-center">
              <button 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={capturePhoto}
              >
                Capturar
              </button>
              <button 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={stopCamera}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFormComponent;
