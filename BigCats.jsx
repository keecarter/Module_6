import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const initialCats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.png' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.png' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.png' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.png' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.png' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow-leopard.png' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.png' },
];

const BigCats = () => {
    const [cats, setCats] = useState(initialCats);
  
    const sortAlphabetically = () => {
      const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
      setCats(sortedCats);
    };
  
    const reverseList = () => {
      const reversedCats = [...cats].reverse();
      setCats(reversedCats);
    };
  
    const filterPanthera = () => {
      const filteredCats = initialCats.filter(cat => cat.latinName.startsWith('Panthera'));
      setCats(filteredCats);
    };
  
    const resetList = () => {
      setCats(initialCats);
    };
  
    const addCat = (newCat) => {
      setCats([...cats, { ...newCat, id: cats.length + 1 }]);
    };
  
    const deleteCat = (id) => {
      setCats(cats.filter(cat => cat.id !== id));
    };
  
    return (
      <div>
        <h1>Big Cats</h1>
        <div>
          <button onClick={sortAlphabetically}>Sort Alphabetically</button>
          <button onClick={reverseList}>Reverse List</button>
          <button onClick={filterPanthera}>Filter Panthera</button>
          <button onClick={resetList}>Reset List</button>
        </div>
        {cats.map(cat => (
          <SingleCat key={cat.id} cat={cat} onDelete={deleteCat} />
        ))}
        <AddCatForm addCat={addCat} />
      </div>
    );
  };
  
  export default BigCats;

