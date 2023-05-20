import React, { useState } from 'react';
import axios from 'axios';
import ListTeachers from './ShowTeachers'
const endpoint = 'http://localhost:8000/api'


function CreateTeacher() {
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la llamada a tu API para enviar los datos del profesor al backend y crearlo
    // Puedes utilizar la librería axios para hacer la solicitud HTTP

    //Ejemplo de solicitud POST utilizando axios
    axios.post(`${endpoint}/teacher`, { document, name, lastname, password })
      .then(response => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch(error => {
        // Manejar errores si ocurre algún problema en la solicitud
      });

    // Reiniciar los campos después de enviar los datos
    setDocument('');
    setName('');
    setLastname('');
    setPassword('');
  };

  return (
    <>
    <section id="crearTeacher">
    <div>
      <h2>Crear Profesor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="document">Documento:</label>
          <input
            type="text"
            id="document"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Apellido:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
    </section>
    <ListTeachers/>
    </>


  );
}

export default CreateTeacher;
