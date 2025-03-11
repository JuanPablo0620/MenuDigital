import React, { useEffect, useState } from 'react'
import BurguerCard from '../BurguerCard/BurguerCard'

const BurguerCardContainer = () => {
    const [burguers, setBurguers] = useState([""]);
    
    useEffect(() =>{
        fetch('/apiMock.json')
        .then(response => response.json())
        .then(data => setBurguers(data))
        .catch((erro) => console.error("Error fetching data:", error));
    }, []);

  return (
    <>
    <div>
        <h1 className='px-2 my-5 font-archivo text-[18px] font-bold text-principal'>Menú</h1>
        <div className='px-2 flex flex-col gap-5'>
            {burguers.map((burguer) =>(
                <BurguerCard key={burguer.id} burguer={burguer}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default BurguerCardContainer