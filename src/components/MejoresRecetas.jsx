import React, {useState,useEffect} from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import recetasData from '../data/recetas';


const MejoresRecetas = () => {

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
}, []);


  return (
    <div>
         
        
        
        <h1 className='text-center text-5xl font-Bakbak font-bold mt-5'>Mejores <span className='font-Bakbak text-red-600 font-bold'>Recetas</span></h1>
        <Link to={'/recetas'}>
        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className='border-white font-Bakbak mx-auto bg-red-600 text-white flex mt-6'>VER TODAS LAS RECETAS</motion.button>
        </Link>
        

        {isLoading ? (<ScaleLoader 
                        className='text-center m-[100px]'
                        height={60}
                        margin={2}
                        width={4} 
                        color="#c72525" />)  : (
         <> 
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {recetasData.slice(0,3).map((receta) => (
        <div key={receta.id}>    
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full rounded-2xl text-white bg-black/60'>
                    <h2 className=' text-2xl lg:text-4xl font-Bakbak  px-1 pt-[20px]'>{receta.nombre}</h2>
                  <Link to={`/detalle/${receta.id}`}>  
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className='border-white font-Bakbak left-2 bg-red-600 text-white mx-2 absolute bottom-2'>VER RECETA</motion.button>
                  </Link>          
                </div>   
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-2xl' src={receta.imagen} alt={receta.nombre} /> 
            </div>
        </div>
        ))}  
        </div> 
        </>
        )}
        
       
    </div>  
  )
}

export default MejoresRecetas