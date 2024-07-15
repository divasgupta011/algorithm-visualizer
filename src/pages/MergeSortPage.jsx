import React from 'react';
import AlgorithmVisualizer from '../components/AlgorithmVisualizer';
import mergeSort from '../algorithms/mergeSort';

const MergeSortPage = () => {
  return (
    <AlgorithmVisualizer algorithm="Merge Sort" sortFunction={mergeSort} />
  );
};

export default MergeSortPage;