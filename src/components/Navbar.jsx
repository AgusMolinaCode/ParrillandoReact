import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { IconChefHat, IconBulb,IconToolsKitchen2 ,IconCalendarEvent, IconMail } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {

    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-2 gap-2'>
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <Link to='/'>
            <h1 className='text-2xl hover:bg-red-300 hover:rounded-full p-2 duration-200 sm:text-3xl lg:text-4xl  font-thin font-Bakbak'>Me<span className='font-bold font-Bakbak text-red-600'>nu</span>
            </h1>
            </Link>
        </div>

        <div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-thin font-Bakbak'>
                Parri<span className='font-bold font-Bakbak text-red-600'>llando</span>
            </h1>
        </div>

        
        {nav ? <div className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        

        <div className={ nav ? 'fixed top-0 left-0 w-[250px] h-screen bg-slate-100 z-10 duration-500' : 'fixed top-0 left-[-100%] w-[250px] h-screen bg-slate-100 z-10 duration-700'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4 font-Bakbak'>Me<span className='font-bold text-red-600 font-Bakbak'>nu</span></h2>
            <nav>
                <ul className='flex flex-col gap-2 p-4 text-gray-800'>
                    <button><Link to='/recetas' className='text-xl py-3 flex'><IconChefHat size={30} className='mr-3' />Recetas</Link></button>
                    <button className='text-xl py-3 flex'><IconToolsKitchen2 size={30} className='mr-3' />Accesorios</button>
                    <button className='text-xl py-3 flex'><IconMail size={30} className='mr-3' />Contacto</button>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar