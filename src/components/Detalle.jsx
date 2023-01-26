import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';


const Detalle = () => {
      const { Id } = useParams();
      const [fiesta, setFiestas] = useState([]);
      const [ingredientesList, setIngredientesList] = useState([]);
      const [instruccionesList,setInstruccionesList] = useState([])
      const [isLoading, setIsLoading] = useState(true);
      
      useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/recetas/${Id}`, {
            params: {
              populate: 'album'
            }
          })
          .then((response) => {
            setFiestas(response.data.data);
            setIngredientesList(response.data.data.attributes.ingredientes.split('\n'));
            setInstruccionesList(response.data.data.attributes.instrucciones.split('\n'));
            setIsLoading(false);
            
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
          });
      }, []);
      
      return (
            
            <div className='max-w-[1640px]  mx-auto p-4 py-5 grid  gap-6'>
                {isLoading ? 
                    <div>
                      <ScaleLoader 
                        className='text-center m-[100px]'
                        height={60}
                        margin={2}
                        width={4} 
                        color="#c72525" />
                    </div>
                : (typeof fiesta === 'object' && fiesta.attributes) ? 
                
                <div>
                  <div className='grid grid-cols-1 lg:flex mt-10 gap-2'>
                    <div>
                      <img className='max-h-[500px] sm:max-h-[400px] object-cover rounded-2xl' src={fiesta.attributes.album.data[3].attributes.url} alt="" />
                    </div>
                    
                    <div>
                      <h1 className='text-[56px] font-Bakbak text-center m-3'>{fiesta.attributes.nombre}</h1>
                      <h2 className='text-center text-2xl font-Bakbak max-w-[1000px] mx-auto m-4'>{fiesta.attributes.descripcion}</h2>
                      <Link to={'/recetas'}>
                        <button className='p-2 flex mx-auto rounded-full font-Bakbak bg-red-600 text-white btn'>VOLVER</button>
                      </Link>
                    </div>
                  </div> 

                  <hr className='m-3 border-slate-700 border-solid border-1' />   

                    <div className='flex flex-col mx-auto  gap-5  mt-10'>
                    <div className='flex'>  
                      <ul className='font-Bakbak'>
                        <h2 className='text-3xl'>Ingredientes:</h2>
                        {ingredientesList.map((ingrediente, index) => (
                          <li className='m-3' key={index}>{ingrediente}</li>
                        ))}
                      </ul>
                    </div>  

                    <hr className='m-3 border-slate-700 border-solid border-1'/>

                    <div className='flex-column lg:flex m-auto gap-10'>  
                        <img className='h-[200px] mt-2 sm:max-h-[200px] object-cover m-auto rounded-2xl' src={fiesta.attributes.album.data[1].attributes.url} alt="" />
                        <img className='h-[200px] mt-2 sm:max-h-[200px] object-cover m-auto rounded-2xl' src={fiesta.attributes.album.data[2].attributes.url} alt="" />
                        <img className='h-[200px] mt-2 sm:max-h-[200px] object-cover m-auto rounded-2xl' src={fiesta.attributes.album.data[0].attributes.url} alt="" />
                      </div>

                    <hr className='m-3 border-slate-700 border-solid border-1'/>

                    
                    <ul className='font-Bakbak'>
                    <h2 className='text-3xl'>Instrucciones:</h2>
                      {instruccionesList.map((instruccion, index) => (
                        <li className='m-3' key={index}>{instruccion}</li>
                      ))}
                    </ul>
                    </div>

                    <hr className='m-3 border-slate-700 border-solid border-1'/>
                    
                    <div className='flex flex-col mt-2'>
                    <h1 className='text-center mx-auto font-Bakbak text-xl'>Dificultad:</h1>
                    <h1 className='text-center font-Bakbak max-w-[1000px] mx-auto p-3 bg-red-500 rounded-full text-white uppercase'>{fiesta.attributes.dificultad}</h1>
                    </div>
                    
                </div>
                

                :
                    <div>No data</div>
                }

                <hr className='m-3 border-slate-700 border-solid border-1'/>
            </div>
      )
}


export default Detalle