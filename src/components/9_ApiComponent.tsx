{/* async, await y fetch, y muestra el resultado en un componente React de alguna API rest */}

import React, { useEffect, useState } from 'react';

// Componente de React que obtiene y muestra personajes de la API de Marvel
const MarvelComponent: React.FC = () => {
  // Almacenar la lista de héroes obtenidos de la API de marvel
  const [heroes, setHeroes] = useState<any[]>([]);

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Función asíncrona para obtener los héroes de la API de Marvel
    const fetchHeroes = async () => {
      const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=045c84765516a85db5c6425669e5f9a7&hash=506cdffb9a1701df584a9d8f6c8731c0';
      
      try {
        // Realiza una solicitud HTTP a la URL de la API
        const response = await fetch(urlAPI);
        if (!response.ok) {
          // Verifica si la respuesta fue exitosa
          throw new Error('no hay respuesta de la red ');
        }
        // Convierte la respuesta en formato JSON
        const json = await response.json();
        // Actualiza el estado 'heroes' con los resultados obtenidos
        setHeroes(json.data.results);
      } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud
        console.error('Error al obtener los datos de la api:', error);
      }
    };
    // Llama a la función para obtener los héroes
    fetchHeroes();
  }, []);// El array vacío [] asegura que useEffect se ejecuta solo una vez

  return (
    <div className="row" id="marvel-row">
      {/* Itera sobre el array de héroes y genera un div para cada uno */}
      {heroes.map((hero) => (
        <div key={hero.id} className="col-md-4">
           {/* Enlace a la página del héroe en Marvel, abriendo en una nueva pestaña */}
          <a href={hero.urls[0].url} target="_blank" rel="noopener noreferrer">
            {/* Imagen del héroe */}
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} className="img-thumbnail" />
          </a>
          {/* Nombre del héroe */}
          <h3 className="title">{hero.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MarvelComponent;
