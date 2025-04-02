import './App.css';
import BurguerCardContainer from './components/BurguerCardContainter/BurguerCardContainer';
import Nav from './components/Nav/Nav';
import SearchResults from './components/SearchResults/SearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Buscador from './components/Buscador/Buscador';

function App() {
  const [category, setCategory] = useState('hamburguesas'); // Estado inicial

  return (
    <>
      <BrowserRouter>
        <Nav setCategory={setCategory} /> {/* Pasar setCategory al Nav */}
        <Buscador />
        <Routes>
          <Route path="/" element={<BurguerCardContainer category={category} />} /> {/* Pasar categoría */}
          <Route path="/search/:searchTerm" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;