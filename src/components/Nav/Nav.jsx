import React from 'react';
import HamburguesasNav from '../ProductosNav/HamburguesasNav';
import TragosNav from '../ProductosNav/TragosNav';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <main className='p-2 border-b-gray-300 border-b-1 shadow-md '>
        {/* Contenedor con scroll horizontal */}
        <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap'>
          {/* Elementos del Nav */}
          <div className='flex gap-3'>
            <div>
              <Link to="/category/hamburguesas" onClick="">
                 <main className='flex flex-col items-center justify-center space-y-2'>
                   <div className='shadow-xl w-[70px] h-[70px] bg-red-200 rounded-full flex flex-col items-center justify-center'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#bd3d3d" viewBox="0 0 256 256">
                       <path d="M227.9,152.72l-39.7,14.44-35.74-14.3a12,12,0,0,0-8.92,0L108,167.08,72.46,152.86a12,12,0,0,0-8.56-.14l-44,16a12,12,0,0,0,8.2,22.56l8.12-2.95A44.06,44.06,0,0,0,80,228h96a44.05,44.05,0,0,0,44-44v-2.87l16.1-5.85a12,12,0,0,0-8.2-22.56ZM176,204H80a20,20,0,0,1-20-20v-4.32l7.8-2.84,35.74,14.3a12,12,0,0,0,8.92,0L148,176.92l35.54,14.22a12,12,0,0,0,8.56.14l2.89-1.06A20,20,0,0,1,176,204ZM12,128a12,12,0,0,1,12-12H232a12,12,0,0,1,0,24H24A12,12,0,0,1,12,128Zm36.2-24H207.8a20.36,20.36,0,0,0,16.38-8.29,19.59,19.59,0,0,0,2.88-17.65C216.12,43.88,175.39,20,128,20S39.89,43.87,28.94,78.05A19.56,19.56,0,0,0,31.82,95.7,20.32,20.32,0,0,0,48.2,104ZM128,44c33.7,0,63.61,14.85,74,36H54C64.4,58.85,94.31,44,128,44Z"></path>
                     </svg>
                   </div>
                   <span className='font-bold text-black text-[13px]'>HAMBURGUESAS</span>
                 </main>
              </Link>
            </div>
            <div>
              <main className='flex flex-col items-center justify-center space-y-2'>
                <div className='shadow-xl w-[70px] h-[70px] bg-red-200 rounded-full flex flex-col items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#bd3d3d" viewBox="0 0 256 256">
                    <path d="M243.09,35.41A12,12,0,0,0,232,28H24a12,12,0,0,0-8.48,20.49L116,149v55H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V149L240.48,48.49A12,12,0,0,0,243.09,35.41ZM203,52,191,64H65L53,52Zm-75,75L89,88H167Z"></path>
                  </svg>
                </div>
                <span className='font-bold text-black text-[13px]'>TRAGOS</span>
              </main>
            </div>
            <div>
              <main className='flex flex-col items-center justify-center space-y-2'>
                <div className='shadow-xl w-[70px] h-[70px] bg-red-200 rounded-full flex flex-col items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#bd3d3d" viewBox="0 0 256 256">
                    <path d="M209,24a12,12,0,0,0-9-4H56A12,12,0,0,0,44.09,33.43l23.15,193A20,20,0,0,0,87.1,244h81.8a20,20,0,0,0,19.86-17.62L211.91,33.43A12,12,0,0,0,209,24ZM186.47,44l-1.92,16H71.45L69.53,44ZM165.35,220H90.65L74.33,84H181.67Z"></path>
                  </svg>
                </div>
                <span className='font-bold text-black text-[13px]'>BEBIDAS</span>
              </main>
            </div>
            <div>
              <main className='flex flex-col items-center justify-center space-y-2'>
                <div className='shadow-xl w-[70px] h-[70px] bg-red-200 rounded-full flex flex-col items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#bd3d3d" viewBox="0 0 256 256">
                    <path d="M68,88V40a12,12,0,0,1,24,0V88a12,12,0,0,1-24,0ZM220,40V224a12,12,0,0,1-24,0V180H152a12,12,0,0,1-12-12,273.23,273.23,0,0,1,7.33-57.82C157.42,68.42,176.76,40.33,203.27,29A12,12,0,0,1,220,40ZM196,62.92C182.6,77,175,98,170.77,115.38A254.41,254.41,0,0,0,164.55,156H196ZM128,39A12,12,0,0,0,104,41l4,47.46a28,28,0,0,1-56,0L56,41A12,12,0,1,0,32,39L28,87c0,.34,0,.67,0,1a52.1,52.1,0,0,0,40,50.59V224a12,12,0,0,0,24,0V138.59A52.1,52.1,0,0,0,132,88c0-.33,0-.66,0-1Z"></path>
                  </svg>
                </div>
                <span className='font-bold text-black text-[13px]'>ENTRADAS</span>
              </main>
            </div>
            {/* Repite los demás elementos del Nav aquí */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Nav;