import React from 'react'
import Evento from './Evento'
import Hero from './Hero'
import MejoresConsejos from './MejoresConsejos'
import MejoresRecetas from './MejoresRecetas'

const Main = () => {
  return (
    <div>  
        <Hero />
        <MejoresRecetas />
        <MejoresConsejos />
        <Evento />
    </div>
  )
}

export default Main