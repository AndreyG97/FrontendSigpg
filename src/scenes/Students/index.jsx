import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const ShowStudent = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = async () => {
        const response = await axios.get(`${endpoint}/students`)
        setStudents(response.data)
        console.log(response.data)
    }

    const deleteStudents = async (id) => {
        await axios.delete(`${endpoint}/student/${id}`)
        getAllStudents()

    }
    return (
        <div>
            <div>

                <Link to= "/create" className='btn btn-success'> Create</Link>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>Programa</th>
                        <th>Documento</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    { students.map((students) => 

                    <tr key = {students.id}>
                        <td>{students.program_id}</td>
                        <td>{students.document}</td>
                        <td>{students.name}</td>
                        <td>{students.lastname}</td>
                        <td>
                            <Link to= {`/edit/${students.id}`}>Editar</Link>
                            <button onClick={()=>deleteStudents (students.id)}>Delete</button>
                        </td>

                    </tr>
                    
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default ShowStudent;