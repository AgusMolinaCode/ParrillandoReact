import React from 'react'
import { IconBrandGithub , IconBrandLinkedin} from '@tabler/icons'


const Footer = () => {
    
    return (
      
    <footer className=" bg-red-200 mt-28 rounded-lg shadow flex justify-between items-center  dark:bg-gray-800">
        <span className="text-md font-bold text-black sm:text-center"><a href="https://www.linkedin.com/in/agustin-molina-994635138/" 
        target='_blank' className="hover:underline text-black"> Developed by Agustin Molina</a>
        </span>
        <ul className="flex items-center mt-3 text-sm gap-4 text-center text-gray-500 dark:text-gray-400 ">
            <li>
                <a href="https://www.linkedin.com/in/agustin-molina-994635138/" target='_blank' className="mr-4 hover:underline md:mr-6 "><IconBrandLinkedin className='text-black' size={35} /></a>
            </li>
            <li>
                <a href="https://github.com/AgusMolinaCode" target='_blank' className="mr-4 hover:underline md:mr-6"><IconBrandGithub className='text-black' size={35}/></a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer