import React from 'react'

const BurguerCard = ({burguer}) => {

    const {name, price, description, image} = burguer;

  return (
    <>
    <div className='border border-gray-200 flex '>
        <div className='flex flex-col'>
           <h1>{name}</h1>
           <p>{description}</p>
           <span>{price}</span> 
        </div>
        <div className=''>
            <img className='w-40' src={image}/>
        </div>
    </div>
    </>
  )
}

export default BurguerCard