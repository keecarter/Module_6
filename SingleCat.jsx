import React from 'react';

const SingleCat = ({ cat, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>{cat.name}</h2>
      <p><em>{cat.latinName}</em></p>
      {cat.image && <img src={cat.image} alt={cat.name} style={{ width: '200px' }} />}
      <button onClick={() => onDelete(cat.id)}>Delete</button>
    </div>
  );
};

export default SingleCat;

