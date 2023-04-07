import React, {useState, useEffect} from 'react'
import { ScaleLoader } from 'react-spinners';
import eventosData from '../data/evento';

const Evento = () => {

    
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

return (
    
    <div>
        <h1 className='text-center text-5xl font-Bakbak font-bold mt-5'>Proximo<span className='font-Bakbak text-red-600 font-bold'> Evento</span></h1>

        <div className='max-w-[1640px]  mx-auto p-4 py-5 grid  gap-6'>
            {isLoading ? 
                (<div>
                  <ScaleLoader 
                        className='text-center m-[100px]'
                        height={60}
                        margin={2}
                        width={4} 
                        color="#c72525" />
                </div>
                  )  : (

                <div>
                    {eventosData.map((fiesta) => (
                      <div>
                        <h1 className='text-3xl font-Bakbak text-center m-3'>{fiesta.nombre}</h1>
                        <h2 className='text-center font-Bakbak max-w-[1000px] text-lg mx-auto m-2'>{fiesta.descripcion}</h2>
                        <h1 className='text-center font-Bakbak m-4 text-2xl lg:text-3xl'>Fecha: {fiesta.fecha}</h1>
                        <h1 className='text-center font-Bakbak m-4 text-2xl lg:text-3xl'>Lugar: {fiesta.lugar}</h1>
                        <img className='max-h-[500px] sm:max-h-[400px] w-full object-cover rounded-2xl' src={fiesta.image} alt={fiesta.nombre} />
                      </div>
                    ))}
                </div>

                )
            }
        </div>
    </div>
    
  )
}

export default Evento

