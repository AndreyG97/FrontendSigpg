import React, { useState, useEffect, useRef } from 'react';

const IframeComponent = () => {


  const [mostrarIframe, setMostrarIframe] = useState(true);
  // este estado TRUE muestra el inframe en el inicio si desea FALSE esta cerrado para que el user decida mostrarlo 

  const toggleIframe = () => {
    setMostrarIframe(!mostrarIframe);
  };

  return (
    <section id="document">
      <div>
        <button onClick={toggleIframe}>
          {mostrarIframe ? 'Ocultar Iframe' : 'Mostrar Iframe'}
        </button>
        {mostrarIframe && (
          <div>
            {/* Aquí puedes ajustar los atributos del iframe según tus necesidades */}
            <iframe
              src={"https://docs.google.com/document/d/1yAG6SDo4lwdk6X2TDlJ5klwV1mxAhtgA3A6tR5DdrvU/edit?usp=sharing"}
              style={{ width: '98.93vw', height: '100vh', border: 'none' }}
              allowFullScreen
              sandbox
            />
          </div>
        )}
      </div>
    </section>
  );
};



export default IframeComponent;
