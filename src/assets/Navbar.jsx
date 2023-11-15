import React from 'react'
import Vite from "../assets/react.svg"
import Logo from "../assets/lo1.png"
import Nav from "../assets/nav2.svg"
const Navbar = () => {
  return (
    <div className="text-white   font-palanquin font-semibold  ">

        <header className="bg-pink-400 flex  justify-between  items-center w-full h-20 fixed">
            
                <div className='absolute my-6 mx-7 mt-7'>
                    <img src={Logo} alt="logo "className='w-20 h-20' />
                </div>
                <nav className=' flex   justify-end items-end flex-1  mx-10 gap-10"'>

                <div >
                <ul className="lg:flex justify-end items-end flex-1  mx-10 gap-10 hidden ">
                   <li className='hover:bg-white hover:border-solid hover:rounded-md p-2 hover:text-black hover:italic hover:shadow-lg shadow-white '> Revendeurs </li>
                   <li className='hover:bg-white hover:border-solid hover:rounded-md p-2 hover:text-black  hover:italic'>Particuliers </li>
                   <li className='hover:bg-white hover:border-solid hover:rounded-md p-2 hover:text-black hover:italic'>Carrières </li>
                </ul>
                </div>

                <div className='lg:hidden'>
                    <button>
                    <img src={Nav} alt="logo "className='w-20 h-20 text-white ' />
                    </button>
                </div>
                </nav>
        </header>
    </div>
  )
}

export default Navbar