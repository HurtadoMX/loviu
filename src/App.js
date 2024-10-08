import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [sizeSi, setSizeSi] = useState(1); // Tamaño del botón "Sí"
  const [sizeNo, setSizeNo] = useState(1); // Tamaño del botón "No"

  const handleNoClick = () => {
    setSizeSi(sizeSi + 0.1); // Incrementar tamaño del botón "Sí"
    setSizeNo(sizeNo - 0.1); // Reducir tamaño del botón "No"
  };

  const handleSiClick = () => {
    sessionStorage.setItem('fromButtons', 'true'); // Marcamos que el usuario pasó por los botones
    navigate('/flower'); // Navegar a la pantalla del SVG
    setSizeSi(1); // Resetear tamaño de los botones
    setSizeNo(1); // Resetear tamaño de los botones
  };

  return (
    <div className="App">
      <h1>Te puedo preguntar algo?</h1>
      <div className="buttons-container">
        <button
          className="si-button"
          style={{ transform: `scale(${sizeSi})` }}
          onClick={handleSiClick}
        >
          Sí
        </button>
        <button
          className="no-button"
          style={{ transform: `scale(${sizeNo})`, visibility: sizeNo <= 0 ? 'hidden' : 'visible' }}
          onClick={handleNoClick}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
