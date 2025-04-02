import React, { useEffect, useState } from 'react';
import BurguerCard from '../BurguerCard/BurguerCard';

const BurguerCardContainer = ({ category }) => {
  const [burguers, setBurguers] = useState([]);

  useEffect(() => {
    fetch('/apiMock.json') // Asegúrate de que este archivo esté en la carpeta "public"
      .then((response) => response.json())
      .then((data) => setBurguers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filtrar los productos según la categoría seleccionada
  const filteredBurguers = burguers.filter((burguer) => burguer.category === category);

  return (
    <div>
      <h1 className="px-2 my-5 font-archivo text-[18px] font-bold text-principal">Menú</h1>
      <div className="px-2 flex flex-col gap-5">
        {filteredBurguers.map((burguer) => (
          <BurguerCard key={burguer.id} burguer={burguer} />
        ))}
      </div>
    </div>
  );
};

export default BurguerCardContainer;