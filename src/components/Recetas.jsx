import React, {useState,useEffect} from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import recetasData from '../data/recetas';


const Recetas = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
    
    const [recetas, setRecetas] = useState(recetasData);

    const filtroCategoria = (categoria) => {
      setRecetas(
        recetasData.filter((item) => item.categoria === categoria)
      )
    }

    const filtrarDificultad = (dificultad) => {
      setRecetas(
        recetasData.filter((item) => item.dificultad === dificultad)
      )
    }

    const resetearFiltros = () => {
      setRecetas(recetasData)
    }

  return (
    <div id='1' className='max-w-[1640px] m-auto px-4 py-2'>
        <h1 className='text-center text-5xl font-Bakbak font-bold mt-5'>Rece<span className='font-Bakbak text-red-600 font-bold'>tas</span></h1>

        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-center text-xl font-Bakbak m-2 text-gray-700'>Filtrar Categoria</p>
                <div className='flex justify-center flex-wrap'>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={() => resetearFiltros()}   className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700'>Todas</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtroCategoria('Carne')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700 '>Carne Vacuna</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtroCategoria('Cerdo')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700 '>Cerdos</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtroCategoria('Pollo')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700 '>Pollos</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtroCategoria('Verduras')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700 '>Verduras</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtroCategoria('Otros')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700 '>Otros</motion.button>
                </div>
            </div>

            <div>
                <p className='font-bold text-center text-xl font-Bakbak m-2 text-gray-700'>Filtrar Dificultad</p>
                <div className='flex justify-center flex-wrap'>
                <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={() => resetearFiltros()}   className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700'>Todas</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtrarDificultad('Bajo')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700'>Bajo</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtrarDificultad('Medio')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700'>Medio</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={()=>filtrarDificultad('Dificil')} className='border-red-600 m-1 bg-red-600 text-white font-Bakbak hover:bg-red-700'>Alto</motion.button>
                </div>
            </div>
        </div>


        {isLoading ? (<ScaleLoader 
                        className='text-center m-[100px]'
                        height={60}
                        margin={2}
                        width={4} 
                        color="#c72525" />)  : (
         <>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
            {recetas.map((item) => (
                <div key={item.id} className='border rounded-xl shadow-2xl hover:scale-105 duration-300'>
                    <img src={item.imagen} alt={item.nombre} className='w-full h-[200px] object-cover rounded-t-xl' />
                    <div className='flex justify-around items-center px-2 py-4 '>
                        <p className='font-Bakbak'>{item.nombre}</p>
                        <Link to={`/detalle/${item.id}`}>   
                            <motion.button
                                className=' border-red-600 bg-red-600 text-white font-Bakbak hover:bg-red-700'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Ver
                            </motion.button>
                        </Link>     
                    </div>
                </div>
            ))}
        </div>
        </>
        )}

    </div>
  )
}

export default Recetas