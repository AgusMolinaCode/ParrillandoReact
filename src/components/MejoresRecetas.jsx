import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


const MejoresRecetas = () => {

  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/recetas`, {
        params: {
          populate: 'imagen',
        }
      })
      .then((response) => {
        setRecetas(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
        <h1 className='text-center text-5xl font-Bakbak font-bold mt-5'>Mejores <span className='font-Bakbak text-red-600 font-bold'>Recetas</span></h1>
        <Link to={'/recetas'}>
        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className='border-white font-Bakbak mx-auto bg-red-600 text-white flex mt-6'>VER TODAS LAS RECETAS</motion.button>
        </Link>
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        

        {recetas.slice(0,3).map((receta) => (
        <div key={receta.id}>    
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full rounded-2xl text-white bg-black/60'>
                    <h2 className=' text-2xl lg:text-4xl font-Bakbak  px-1 pt-[20px]'>{receta.attributes.nombre}</h2>
                  <Link to={`/detalle/${receta.id}`}>  
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className='border-white font-Bakbak left-2 bg-red-600 text-white mx-2 absolute bottom-2'>VER RECETA</motion.button>
                  </Link>          
                </div>   
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-2xl' src={receta.attributes.imagen.data.attributes.formats.small.url} alt="/" /> 
            </div>
        </div>
        ))}  
        </div>
    </div>  
  )
}

export default MejoresRecetas