import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import recetasData from '../data/recetas';

const Detalle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recetas, setRecetas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    setRecetas(recetasData);
  }, []);


  const receta = useMemo(() => {
    return recetas.find((receta) => receta.id === parseInt(id));
  }, [id, recetas]);


  return (
    <div className='max-w-[1640px]  mx-auto p-4 py-5 grid  gap-6'>
      {isLoading ? (
        <div>
          <ScaleLoader
            className='text-center m-[100px]'
            height={60}
            margin={2}
            width={4}
            color='#c72525'
          />
        </div>
      ) : (
        <div>
          {receta ? (
            <div>
              <h1 className='text-[40px] lg:text-[56px] font-Bakbak text-center m-3'>{receta.nombre}</h1>
              <div className=''>
              <hr className='m-3 border-slate-700 border-solid border-1' />

                <div className='flex flex-wrap  lg:p-[3rem] justify-center gap-[4rem] lg:gap-[9rem] items-center'>

                  <div>
                    <img
                      className='w-[400px] h-[400px] rounded-xl object-cover'
                      src={receta.imagen}
                      alt={receta.nombre}
                    />
                  </div>
                  

                  <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-[35px] font-Bakbak text-center m-3'>
                      Ingredientes:
                      <ol className='m-2'>
                        {receta.ingredientes.map((ingrediente, index) => (
                          <li className='text-xl' key={index}>{ingrediente}</li>
                        ))}
                      </ol>
                    </h2>
                  </div>


                </div>
                
                <hr className='m-3 border-slate-700 border-solid border-1' />

                <div className='flex justify-center mx-auto'>
                  <h2 className='text-[35px] lg:m-[3rem] font-Bakbak text-center '>
                    Instrucciones:
                    <ol className='list-decimal m-2'>
                      {receta.instrucciones.map((instruccion, index) => (
                        <li className=' p-2 text-lg lg:text-xl' key={index}>{instruccion}</li>
                      ))}
                    </ol>
                  </h2>
                </div>

                <hr className='m-3 border-slate-700 border-solid border-1' />


                <div className=''>
                  <h2 className='text-[35px] lg:mt-[5rem] font-Bakbak text-center m-3'>
                    Album:
                  </h2>
                  <div className='flex flex-wrap mx-auto justify-center gap-4'>
                    {receta.album.map((album, index) => (
                      <div>
                        <img className='w-[450px] h-[300px] rounded-xl' src={album} alt='Fotos Album' key={index} />
                      </div>
                    ))}
                  </div>
                </div>

                <hr className='m-3 border-slate-700 border-solid border-1' />


                <div className='mt-10'>
                  <Link to={'/recetas'}>
                    <button className='p-2 flex mx-auto rounded-full font-Bakbak bg-red-600 text-white btn'>
                      VOLVER
                    </button>
                  </Link>
                </div>

              </div>
            </div>


          ) : (
            <div>
              <h1 className='text-[56px] font-Bakbak text-center m-3'>Receta no encontrada</h1>
              <Link to={'/recetas'}>
                <button className='p-2 flex mx-auto rounded-full font-Bakbak bg-red-600 text-white btn'>
                  VOLVER
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
};

export default Detalle;
