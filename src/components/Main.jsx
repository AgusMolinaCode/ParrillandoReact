import React from 'react'
import Evento from './Evento'
import Hero from './Hero'
import MejoresConsejos from './MejoresConsejos'
import MejoresRecetas from './MejoresRecetas'
import Footer from './Footer'

const Main = () => {
  return (
    <div>  
        <Hero />
        <MejoresRecetas />
        <MejoresConsejos />
        <Evento />
        <Footer />
    </div>
  )
}

export default Main