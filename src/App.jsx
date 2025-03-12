import './App.css';
import BurguerCardContainer from './components/BurguerCardContainter/BurguerCardContainer';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('hamburguesas');

  return (
    <>
      <BrowserRouter>
        <Nav setCategory={setCategory} />
        <BurguerCardContainer category={category} />
      </BrowserRouter>
    </>
  );
}

export default App;