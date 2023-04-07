import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import consejosData from '../data/consejos';
import { ScaleLoader } from 'react-spinners';

const DetalleConsejo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [consejos, setConsejos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setConsejos(consejosData);
  }, []);

  const consejo = useMemo(() => {
    return consejos.find((consejo) => consejo.id === parseInt(id));
  }, [id, consejos]);

  return (
    <div className="relative">
      {isLoading ? (
        <div>
          <ScaleLoader
            className="text-center m-[100px]"
            height={60}
            margin={2}
            width={4}
            color="#c72525"
          />
        </div>
      ) : (
        <div>
          {consejo ? (
            <div className="px-12">
              <h1 className="text-center font-Bakbak text-3xl sm:text-5xl m-4">
                {consejo.title}
              </h1>
              <hr className="m-3 border-slate-700 border-solid border-1" />

              <div>
                <img
                  className="max-h-[600px] sm:max-h-[450px] w-full object-cover mx-auto rounded-2xl"
                  src={consejo.image}
                  alt={consejo.title}
                />
              </div>
              <hr className="m-3 border-slate-700 border-solid border-1" />

              <div className="bg-gradient-to-r from-red-500 to-red-800 rounded-2xl">
                <p className="flex max-w-[850px] text-white justify-center items-center mx-auto p-4 text-md sm:text-xl font-bold">
                  {consejo.descripcion}
                </p>
              </div>
              <div className='mt-10'>
                  <Link to={'/'}>
                    <button className='p-2 flex mx-auto rounded-full font-Bakbak bg-red-600 text-white btn'>
                      VOLVER
                    </button>
                  </Link>
                </div>
              <hr className="m-3 border-slate-700 border-solid border-1" />
            </div>
          ) : (
            <div>
              <h1 className='text-[56px] font-Bakbak text-center m-3'>Consejo no encontrado</h1>
              <Link to={'/'}>
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

export default DetalleConsejo;
