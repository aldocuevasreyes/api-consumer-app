// src/components/DetailItem.js
import React from 'react';

const DetailItem = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
};

export default DetailItem;
