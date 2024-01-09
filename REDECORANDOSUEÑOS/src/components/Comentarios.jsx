import React, { useState } from 'react';
import style from '../components/style/comentarios.module.css'

const Comentarios = () => {
  const [comentario, setComentario] = useState('');
  const [puntuacion, setPuntuacion] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con el comentario y la puntuación, como enviarlos a un servidor
    console.log('Comentario:', comentario);
    console.log('Puntuación:', puntuacion);
    // Reiniciar los estados después de enviar el comentario
    setComentario('');
    setPuntuacion(0);
  };

  return (
    <div className="container mt-5">
      <h1 className={`mb-4 ${style.textBody}`}>¡Deja Tu Comentario!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comentario">Comentario:</label>
          <textarea
            className="form-control"
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="puntuacion">Puntuación:</label>
          <select
            className="form-control"
            id="puntuacion"
            value={puntuacion}
            onChange={(e) => setPuntuacion(parseInt(e.target.value, 10))}
            required
          >
            <option value="0">Selecciona una puntuación</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Enviar comentario</button>
      </form>
    </div>
  );
};

export default Comentarios;
