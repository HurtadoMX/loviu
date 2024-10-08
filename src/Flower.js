import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import flowerSVG from './quieres.svg'; // Asegúrate de que el archivo SVG esté en la misma carpeta
import backgroundMusic from './quieresser.mp3'; // Asegúrate de que el archivo de audio esté en la misma carpeta

function Flower() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    // Verificar si el usuario llegó desde la página de los botones
    const visitedFromButtons = sessionStorage.getItem('fromButtons');
    
    // Si no llegamos aquí desde la página de los botones, redirigir a la página principal
    if (!visitedFromButtons) {
      navigate('/'); // Redirigir al usuario a la página principal
    }

    const audioElement = audioRef.current;

    // Reproducir el audio si llegamos desde la página correcta
    if (visitedFromButtons) {
      const playAudio = () => {
        audioElement.play().catch(error => {
          console.log('Interacción requerida para reproducir el audio.');
        });
      };

      window.addEventListener('click', playAudio);

      return () => {
        audioElement.pause(); // Pausar el audio al salir de la pantalla
        audioElement.currentTime = 0; // Resetear el audio
        window.removeEventListener('click', playAudio); // Limpiar el event listener
      };
    }
  }, [navigate]);

  return (
    <div className="flower-container">
      <svg className="flower-svg" viewBox="0 0 400 400">
        <image href={flowerSVG} width="400" height="400" />
      </svg>
      <audio ref={audioRef} src={backgroundMusic} />
    </div>
  );
}

export default Flower;



