// src/components/AlgorithmVisualizer.jsx

import React, { useState, useEffect } from 'react';

const AlgorithmVisualizer = ({ algorithm, sortFunction }) => {
  const [array, setArray] = useState([]);
  const [colorArray, setColorArray] = useState([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 5);
    }
    setArray(newArray);
    setColorArray(new Array(newArray.length).fill('blue'));
  };

  const visualizeAlgorithm = async () => {
    setSorting(true);
    await sortFunction(array, setArray, setColorArray);
    setSorting(false);
    setColorArray(new Array(array.length).fill('blue'));
  };

  return (
    <div className="visualizer">
      <h2>{algorithm} Visualizer</h2>
      <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
      <button onClick={visualizeAlgorithm} disabled={sorting}>Visualize {algorithm}</button>
      <div className="array-container">
        {array.map((value, idx) => (
          <div 
            className="array-bar" 
            key={idx}
            style={{
              height: `${value}px`,
              width: '10px',
              backgroundColor: colorArray[idx],
              display: 'inline-block',
              margin: '0 1px'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;