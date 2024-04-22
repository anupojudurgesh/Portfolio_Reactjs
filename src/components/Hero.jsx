import React from 'react'
import heroimage from '../assets/Main_photo.png';
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>

        <div className='my-auto mx-auto w-[350px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt="hero image"/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-bold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-400 inline-block">I'm a</span><br/>
            <TypeAnimation sequence={[
                "Frontend Dev", 1000,
                "Graphic Designer", 1000,
                "Web Designer", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity} />
            </h1>
            <p className='text-white sm:text-xl my-6 lg:text-[20px]'>
            My Name is Durgesh! - Experienced graphic designer with over 5 years of expertise, also proficient in frontend development.
            </p>

            <div className='my-8 display-flex justify'>
                <a href="https://drive.google.com/file/d/1-K_xrN85HiSfPN-d7rq3S135csr5wiKM/view?usp=sharing" className='w-full rounded-xl
                text-white bg-gradient-to-br from-green-600 to-blue-400 hover:bg-gradient-to-bl 
                focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium 
                text-sm px-5 py-2.5 text-center me-2 mb-2 '>Download CV</a>

                <a href="tel:7569259998" className=' border border-gray-100 w-full rounded-xl
                text-white  hover:bg-gradient-to-br from-green-600 to-blue-400
                focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium 
                text-sm px-5 py-2.5 text-center me-2 mb-2 hover:outline-none'>Contact</a>
            </div>
            
        </div>

    </div>  

  )
}

export default Hero
