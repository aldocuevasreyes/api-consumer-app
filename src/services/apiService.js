// src/services/apiService.js

// Define la URL base de la API
const API_URL = 'https://jsonplaceholder.typicode.com';

// Función asíncrona que realiza solicitudes a la API
async function fetchData(endpoint) {
  try {
    // Realiza una solicitud GET a la URL completa formada por la URL base y el endpoint proporcionado
    const response = await fetch(`${API_URL}/${endpoint}`);

    // Verifica si la respuesta tiene un estado "ok" (código de estado 2xx)
    if (!response.ok) {
      // Si la respuesta no es "ok", lanza un error con un mensaje descriptivo
      throw new Error('Error fetching data from the API');
    }

    // Convierte la respuesta a formato JSON
    const data = await response.json();

    // Devuelve los datos obtenidos de la API
    return data;
  } catch (error) {
    // Si ocurre algún error durante el proceso, imprime el error en la consola y vuelve a lanzar el error
    console.error(error);
    throw error;
  }
}

// Exporta la función fetchData para que pueda ser utilizada en otros módulos
export { fetchData };
