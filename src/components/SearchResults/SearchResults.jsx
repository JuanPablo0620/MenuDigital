import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BurguerCard from '../BurguerCard/BurguerCard';

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/apiMock.json')
      .then(response => response.json())
      .then(data => {
        const filteredResults = data.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchTerm]);

  return (
    <div>
      <h1 className='px-2 my-5 font-archivo text-[18px] font-bold text-principal'>Resultados de búsqueda</h1>
      <div className='px-2 flex flex-col gap-5'>
        {results.map((item) => (
          <BurguerCard key={item.id} burguer={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;