import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GenerarFechasDisponibles = () => {
  const [generating, setGenerating] = useState(false);
  const [experiencias, setExperiencias] = useState([]); // Lista de experiencias
  const [selectedExperienciaId, setSelectedExperienciaId] = useState('');

  useEffect(() => {
    // Obtener la lista de experiencias disponibles desde el servidor
    const fetchExperiencias = async () => {
      try {
        const response = await axios.get('http://localhost:4000/experiencias');
        setExperiencias(response.data); // Establecer la lista de experiencias en el estado
      } catch (error) {
        console.error('Error al obtener la lista de experiencias:', error);
      }
    };

    fetchExperiencias();
  }, []);

  const handleGenerarFechas = async () => {
    if (!selectedExperienciaId) {
      console.error('Debes seleccionar una experiencia.');
      return;
    }

    try {
      setGenerating(true);
      // Realiza la solicitud POST al servidor para generar fechas
      const response = await axios.post('http://localhost:4000/generar-fechas', {
        experienciaId: selectedExperienciaId,
      });
      console.log('Fechas generadas y cargadas:', response.data);
      // Aquí puedes actualizar tu estado o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al generar y cargar fechas:', error);
      // Maneja el error de acuerdo a tus necesidades
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div>
      <h2>Selecciona una experiencia:</h2>
      <select
        value={selectedExperienciaId}
        onChange={(e) => setSelectedExperienciaId(e.target.value)}
      >
        <option value="">Selecciona una experiencia</option>
        {experiencias.map((experiencia) => (
          <option key={experiencia.id} value={experiencia.id}>
            {experiencia.titulo}
          </option>
        ))}
      </select>
      <button onClick={handleGenerarFechas} disabled={generating}>
        {generating ? 'Generando...' : 'Generar Fechas Disponibles'}
      </button>
    </div>
  );
};

export default GenerarFechasDisponibles;
