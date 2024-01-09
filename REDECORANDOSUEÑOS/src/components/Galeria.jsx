import React, { useState, useEffect } from 'react';
import Imagenes from './Imagenes';
import styles from '../components/style/galeria.module.css';

const Galeria = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa el índice de la imagen actual cada 5 segundos
      setCurrentImage((prevIndex) => (prevIndex + 1) % Imagenes.length);
    }, 5000);

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
  }, []); // El efecto se ejecutará solo al montar el componente

  return (
    <div>
      <section className={`d-flex align-items-center justify-content-center ${styles.textBody}`}>
        <h1 className={`text-center ${styles.textG}`}>Galeria</h1>
      </section>
      <div
        className={`card-body d-grid align-items-center justify-content-center ${styles.cardBody}`}
      >
        <section>
          <img src={Imagenes[currentImage]} width="800px" height='500px' alt={`Imagen ${currentImage + 1}`} />
        </section>
        <br />
      </div>
    </div>
  );
};

export default Galeria;



