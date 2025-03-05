import React from 'react'

const TragosNav = () => {
  return (
    <main className='flex flex-col items-center justify-center space-y-2'>
        <div className='shadow-xl w-[70px] h-[70px] bg-red-200  rounded-full flex flex-col items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#d24646" viewBox="0 0 256 256"><path d="M227.9,152.72l-39.7,14.44-35.74-14.3a12,12,0,0,0-8.92,0L108,167.08,72.46,152.86a12,12,0,0,0-8.56-.14l-44,16a12,12,0,0,0,8.2,22.56l8.12-2.95A44.06,44.06,0,0,0,80,228h96a44.05,44.05,0,0,0,44-44v-2.87l16.1-5.85a12,12,0,0,0-8.2-22.56ZM176,204H80a20,20,0,0,1-20-20v-4.32l7.8-2.84,35.74,14.3a12,12,0,0,0,8.92,0L148,176.92l35.54,14.22a12,12,0,0,0,8.56.14l2.89-1.06A20,20,0,0,1,176,204ZM12,128a12,12,0,0,1,12-12H232a12,12,0,0,1,0,24H24A12,12,0,0,1,12,128Zm36.2-24H207.8a20.36,20.36,0,0,0,16.38-8.29,19.59,19.59,0,0,0,2.88-17.65C216.12,43.88,175.39,20,128,20S39.89,43.87,28.94,78.05A19.56,19.56,0,0,0,31.82,95.7,20.32,20.32,0,0,0,48.2,104ZM128,44c33.7,0,63.61,14.85,74,36H54C64.4,58.85,94.31,44,128,44Z"></path></svg>
        </div>
        <span className='font-bold text-black text-[13px] '>HAMBURGUESAS</span>
</main>
  )
}

export default TragosNav