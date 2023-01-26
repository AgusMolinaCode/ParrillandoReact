import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';


const DetalleConsejo = () => {

  const { Id } = useParams(); 
  const [consejos, setConsejos] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/consejos/${Id}`, {
        params: {
          populate: 'imagen'
        }
      })
      .then((response) => {
        setConsejos(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='relative'>
      {isLoading ? 
                <div>
                  <ScaleLoader 
                        className='text-center m-[100px]'
                        height={60}
                        margin={2}
                        width={4} 
                        color="#c72525" />
                </div>
            : (typeof consejos === 'object' && consejos.attributes) ? 
            
          
              <div className='px-12 '>
                <h1 className='text-center font-Bakbak text-3xl sm:text-5xl m-4'>{consejos.attributes.nombre}</h1>
                <hr className='m-3 border-slate-700 border-solid border-1' />   

                <div>
                  <img className='max-h-[600px] sm:max-h-[450px] w-full object-cover mx-auto rounded-2xl' src={consejos.attributes.imagen.data.attributes.url} alt="" />
                </div>
                <hr className='m-3 border-slate-700 border-solid border-1' />   

                <div className='bg-slate-200 rounded-2xl'>
                  <p className='flex max-w-[850px] justify-center items-center mx-auto p-4 text-md sm:text-xl font-bold'>{consejos.attributes.descripcion}</p>
                </div>
                <hr className='m-3 border-slate-700 border-solid border-1' />   

              </div>
            

            :

            <div>No data</div>
      }
    </div>
  )
}

export default DetalleConsejo