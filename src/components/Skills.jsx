import React from 'react'
import html from '../assets/html.png';
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import photoshop from "../assets/photoshop.png"
import illustrator from "../assets/illustrator.png"
import github from "../assets/github.png"

const Skills = () => {
  return (
    <div className='border border-gray-400 rounded-3xl bg-black text-gray-400 md:h-[160px] max-w-[1200px] mx-auto grid grid-cols-3
    place-items-center md:flex md:justify-between md:items-center'>
    
    <h2 className='text-gray-200 text-2xl md:text-4xl font-bold m-4 ml-10'>
      My <br/><span className='text-orange-300'>Tech <br/> Stack</span> 
    </h2>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
        <img src={html} alt=''></img>
        <p className='mt-2'>HTML</p>
      </div>
      
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
        <img src={css} alt=''></img>
        <p className='mt-2'>CSS</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
        <img src={javascript} alt=''></img>
        <p className='mt-2'>JAVASCRIPT</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
        <img src={react} alt=''></img>
        <p className='mt-2'>REACT</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
        <img src={tailwind} alt=''></img>
        <p className='mt-2'>TAILWIND</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px] '>
        <img src={github} alt=''></img>
        <p className='mt-2'>GITHUB</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
        <img src={photoshop} alt=''></img>
        <p className='mt-2 text-[13px] text-center'>ADOBE PHOTOSHOP</p>
      </div>

      <div className='flex flex-col items-center m-4 mr-10 sm:my-0 w-[40px] md:w-[70px]'>
        <img src={illustrator} alt=''></img>
        <p className='mt-2 text-[13px] text-center'>ADOBE ILLUSTRATOR</p>
      </div>

    </div>
  )
}

export default Skills
