import React, { useState } from 'react';
import axios from 'axios';

const PdfUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    const onSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('pdf', selectedFile);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/save-pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert('PDF subido con éxito!');
        } catch (error) {
            console.error(error);
            alert('Error al subir el PDF.');
        }
    };

    return (
        <section id="UploadPdf">
            <div>
                PDF
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="file" onChange={onFileChange} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default PdfUploader;
