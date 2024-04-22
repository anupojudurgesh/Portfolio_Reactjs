import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import MainText from '../assets/main_text.png'
import mainLogo from '../assets/AD_logo.png';

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
        <div className=' bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center' >
            < img src={mainLogo} className='h-[110px] p-4 ml-8 mt-8'/>
            <ul className='hidden md:flex m-10 text-white '>
                <li className='p-5 hover:text-orange-200'><a href='#about'>About</a></li>
                <li className='p-5 hover:text-orange-200'><a href='#work'>Work</a></li>
                <li className='p-5 hover:text-orange-200'><a href='#contact'>Contact</a></li>
            </ul>

        <div onClick={handleNav} className='block md:hidden mr-4'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

            <div className={nav ? ' z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left -[100%]'}>
            <h1 className='text-3xl primary-color mr-5 ml-10 mt-10 text-orange-100'>Durgesh Anupoju</h1>
            <ul className='p-8 text-2xl'>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#work'>Work</a></li>
                <li className='p-5'><a href='#about'>Contact</a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
