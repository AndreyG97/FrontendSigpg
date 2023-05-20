import React, { useEffect, useState } from 'react';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a tu backend para obtener la lista de profesores
    // y luego actualizar el estado con la respuesta recibida
    const fetchTeachers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/teachers'); // Ajusta la URL de la API según tu backend
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.log('Error al obtener la lista de profesores:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <section id="listTeacher">
    <div>
      <h2>Lista de Profesores</h2>
      {teachers.length === 0 ? (
        <p>No se encontraron profesores.</p>
      ) : (
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              <span>{teacher.name} {teacher.lastname}</span>
              <span>{teacher.document}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    </section>
  );
};

export default TeacherList;
