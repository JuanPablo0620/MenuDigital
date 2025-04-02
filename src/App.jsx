import './App.css';
import BurguerCardContainer from './components/BurguerCardContainter/BurguerCardContainer';
import Nav from './components/Nav/Nav';
import SearchResults from './components/SearchResults/SearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Buscador from './components/Buscador/Buscador';

function App() {
  const [category, setCategory] = useState('hamburguesas'); 

  return (
    <>
      <BrowserRouter>
        <Nav setCategory={setCategory} /> 
        <Buscador />
        <Routes>
          <Route path="/" element={<BurguerCardContainer category={category} />} /> 
          <Route path="/search/:searchTerm" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;