import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Evento = () => {

    const [fiesta, setFiestas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/evento`, {
          params: {
            populate: 'imagen'
          }
        })
        .then((response) => {
            setFiestas(response.data.data);
            setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }, []);


return (
    
    <div>
        <h1 className='text-center text-5xl font-Bakbak font-bold mt-5'>Proximo<span className='font-Bakbak text-red-600 font-bold'> Evento</span></h1>

        <div className='max-w-[1640px]  mx-auto p-4 py-5 grid  gap-6'>
            {isLoading ? 
                <div></div>
            : (typeof fiesta === 'object' && fiesta.attributes) ? 
            
            <div>
                <h1 className='text-3xl font-Bakbak text-center m-3'>{fiesta.attributes.nombre}</h1>
                <h2 className='text-center font-Bakbak max-w-[1000px] mx-auto m-4'>{fiesta.attributes.descripcion}</h2>
                <h1 className='text-center font-Bakbak m-4 text-4xl'>Fecha: {fiesta.attributes.fecha}</h1>
                <img className='max-h-[500px] sm:max-h-[400px] w-full object-cover rounded-2xl' src={fiesta.attributes.imagen.data.attributes.url} alt="" />
            </div>

            :
                <div>No data</div>
            }
        </div>
    </div>
    
  )
}

export default Evento

