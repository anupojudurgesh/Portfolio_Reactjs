import React from 'react'
import aboutImg from '../assets/main_img2.png';
import aboutImg2 from '../assets/about_img.jpg';


const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">

      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex '>

            <div className='my-auto mx-6'>

            <h2 className='text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-400'>About Me</h2>
            <p className=' text-base lg:text-lg '>
                I'm <span className='text-orange-200'>Anupoju Naga Venkata Durgesh</span>, a frontend developer and graphic designer based in
                 Amalapuram. Holding a degree in Bachelors Of Technology
                 from Bonam Venkata Chalamayya Engineering College, Odalarevu,
                 I leverage my expertise in HTML, CSS, React, and Tailwind CSS 
                 to build captivating digital experiences. With a keen eye 
                 for design and proficiency in tools like 
                 Photoshop, Illustrator, and Photo Impact, 
                 I bring creativity and innovation to every project. 
                 Whether it's crafting pixel-perfect designs or writing clean, 
                 maintainable code, I'm dedicated to delivering solutions that
                  exceed expectations. 
                 Let's collaborate and transform your digital vision into reality!
                </p>
                </div>
                 </div>
                <img className='mx-auto rounded-3xl py-8 md:py-0 ' src={aboutImg2} width={300} height={300}></img>
        </div>
       </div>
           
    
  )
}

export default About
