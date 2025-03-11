import React from 'react'

const BurguerCard = ({burguer}) => {

    const {name, price, description, image} = burguer;

  return (
    <>
    <div className='border shadow-md shadow-gray-400 border-gray-200 flex p-3 text-principal font-archivo rounded-2xl'>
        <div className='flex flex-col gap-1 w-[130%]'>
           <h1 className='font-bold'>{name}</h1>
           <p>{description}</p>
           <span className='text-red-500 font-bold'>${price}</span> 
        </div>
        <div className=''>
            <img className='rounded-2xl' src={image}/>
        </div>
    </div>
    </>
  )
}

export default BurguerCard