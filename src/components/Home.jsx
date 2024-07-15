import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Algorithm Visualizer</h1>
      <p>Welcome to the Algorithm Visualizer. Choose an algorithm to visualize:</p>
      <ul>
        <li><Link to="/bubble-sort">Bubble Sort</Link></li>
        <li><Link to="/merge-sort">Merge Sort</Link></li>
      </ul>
    </div>
  );
};

export default Home;