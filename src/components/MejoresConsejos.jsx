import React, {useState,useEffect} from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import  consejosData  from '../data/consejos';


const MejoresConsejos = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <div>
        <h1 className='text-center text-5xl font-Bakbak font-bold mt-5'>Consejos <span className='font-Bakbak text-red-600 font-bold'>Parrilleros</span></h1>
        

        {isLoading ? (<ScaleLoader 
                        className='text-center m-[100px]'
                        height={60}
                        margin={2}
                        width={4} 
                        color="#c72525" />)  : (
         <>
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {consejosData.map((consejo) => (
        <div key={consejo.id}>    
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full rounded-2xl text-white bg-black/60'>
                    <h2 className=' text-2xl lg:text-4xl font-Bakbak  px-1 pt-[20px]'>{consejo.title}</h2>
                  <Link to={`/consejo/${consejo.id}`}>  
                    <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className='border-white font-Bakbak left-2 bg-red-600 text-white mx-2 absolute bottom-2'>VER CONSEJO</motion.button>
                  </Link>          
                </div>   
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-2xl' src={consejo.image} alt={consejo.title} /> 
            </div>
        </div>
        ))}  
        </div>
        </>
        )}
    </div>  
  )
}

export default MejoresConsejos