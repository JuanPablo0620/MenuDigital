import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
    
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if(search.trim() !== '') {
            navigate(`/search/${search}`);
        }
      };

  return (
    <>
        <div className='flex-grow flex  items-center gap-3 mt-4 pl-2'>
            <div className=' w-[300px] h-6 rounded-full flex items-center border-2 border-gray-300 shadow-md p-5'>
              <input className='search-input' type="text" placeholder='Buscar producto' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button className='bg-gray-500 text-white rounded-full w-15 h-10 hover:bg-gray-400' onClick={handleSearch}>Buscar</button>
        </div>
    </>
  )
}

export default Buscador