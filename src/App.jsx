import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BubbleSortPage from './pages/BubbleSortPage';
import MergeSortPage from './pages/MergeSortPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bubble-sort" element={<BubbleSortPage />} />
          <Route path="/merge-sort" element={<MergeSortPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;