import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-2'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] rounded-2xl bg-black/60 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Bakbak font-bold'>"Maestros de la <span className='text-orange-500'>parrilla,</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Bakbak font-bold'>técnicas y recetas"</h1>
            </div>
            <img className='w-full rounded-2xl max-h-[500px] object-cover' src="https://cdn.colombia.com/sdi/2021/06/08/gastronomia-argentina-colombia-924187.jpg" alt="asado" />
        </div>
    </div>
  )
}

export default Hero