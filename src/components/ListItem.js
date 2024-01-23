// src/components/ListItem.js

// Importa la biblioteca React
import React from 'react';

// Definición del componente funcional ListItem
const ListItem = ({ item, onItemClick }) => {
  return (
    // Renderiza un div que responde al clic y llama a la función onItemClick con el objeto item como argumento
    <div onClick={() => onItemClick(item)}>
      {/* Renderiza un párrafo con el título del objeto item */}
      <p>{item.title}</p>
    </div>
  );
};

// Exporta el componente ListItem para que pueda ser utilizado en otros archivos
export default ListItem;
