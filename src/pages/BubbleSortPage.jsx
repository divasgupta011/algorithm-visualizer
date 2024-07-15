import React from 'react';
import AlgorithmVisualizer from '../components/AlgorithmVisualizer';
import bubbleSort from '../algorithms/bubbleSort';

const BubbleSortPage = () => {
  return (
    <AlgorithmVisualizer algorithm="Bubble Sort" sortFunction={bubbleSort} />
  );
};

export default BubbleSortPage;