// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchData } from './services/apiService';
import ListItem from './components/ListItem';
import DetailItem from './components/DetailItem';
import './styles/App.css';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData('posts').then((data) => setItems(data));
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <div className="list-container">
        {items.map((item) => (
          <ListItem key={item.id} item={item} onItemClick={handleItemClick} />
        ))}
      </div>
      <div className="detail-container">
        {selectedItem ? <DetailItem item={selectedItem} /> : <p>Select an item</p>}
      </div>
    </div>
  );
}

export default App;
