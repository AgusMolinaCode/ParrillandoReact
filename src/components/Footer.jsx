import React from 'react'
import { IconBrandGithub , IconBrandLinkedin} from '@tabler/icons'


const Footer = ({isLoading}) => {
    if (!isLoading) return null
    return (
      
    <footer className="p-4 bg-red-200 mt-[150px] rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-md font-bold text-black sm:text-center">© 2023 <a href="#" className="hover:underline text-black">Agustin Molina</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm gap-4 text-gray-500 dark:text-gray-400 sm:mt-0">
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