import React from 'react'
import Work1 from '../assets/Work1.png';
import Work2 from '../assets/Work2.png';
import Work3 from '../assets/Work 3.png';
import Work4 from '../assets/Work 4.png';
import Work5 from '../assets/Work 5.png';
import Work6 from '../assets/Work6.png';

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-400'>Work</h2>
        <p className='text-gray-400 mt-3'>Check some of my recent work</p>
      </div>

      <div className='grid sm:grid-cols md:grid-cols-3 gap-4'>

      <div className='transform transition-transform duration-300 hover:scale-105
       overflow-hidden shawdow-lg shawdow-[#040c16]
        group container rounded-md flex justify-center 
        items-center mx-auto  h-[200px] bg-cover relative'>
          <img src={Work2} layout='fill' objectFit='cover' alt=" "/>

        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
        justify-center items-center '>
          <span className='text-2xl font-bold text-white tracking-wider'>Interiors Website</span>
          <div className='pt-8 text-center'>
            <a href='https://anupojudurgesh.github.io/Durgesh-Anupoju-Srinu-Interials1/'> <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>Live</button></a>
          </div>
        </div>
      </div>

      <div className='transform transition-transform duration-300 hover:scale-105
       overflow-hidden shawdow-lg shawdow-[#040c16]
        group container rounded-md flex justify-center 
        items-center mx-auto  h-[200px] bg-cover relative'>
          <img src={Work1} layout='fill' objectFit='cover' alt=" "/>

        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
        justify-center items-center '>
          <span className='text-2xl font-bold text-white tracking-wider'>Personal Website</span>
          <div className='pt-8 text-center'>
            <a href='https://anupojudurgesh.github.io/Durgesh_Designs_Portfolio/'> <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>Live</button></a>
          </div>
        </div>

      </div>

      <div className='transform transition-transform duration-300 hover:scale-105
       overflow-hidden shawdow-lg shawdow-[#040c16]
        group container rounded-md flex justify-center 
        items-center mx-auto  h-[200px] bg-cover relative'>
          <img src={Work6} layout='fill' objectFit='cover' alt=" "/>

        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
        justify-center items-center '>
          <span className='text-xl font-bold text-white tracking-wider'>Hospital Management System</span>
          <div className='pt-8 text-center'>
            <a href='https://github.com/anupojudurgesh/MYSQL.git'> <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>Live</button></a>
          </div>
        </div>

      </div>

      <div className='transform transition-transform duration-300 hover:scale-105
       overflow-hidden shawdow-lg shawdow-[#040c16]
        group container rounded-md flex justify-center 
        items-center mx-auto h-[200px] bg-cover relative'>
          <img src={Work4} layout='fill' objectFit='cover' alt=" "/>

        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
        justify-center items-center '>
          <span className='text-2xl font-bold text-white tracking-wider'>Age Calculator</span>
          <div className='pt-8 text-center'>
            <a href='/'> <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>Live</button></a>
          </div>

        </div>

      </div>

      <div className='transform transition-transform duration-300 hover:scale-105
       overflow-hidden shawdow-lg shawdow-[#040c16]
        group container rounded-md flex justify-center 
        items-center mx-auto sm:h-[200px] bg-cover relative'>
          <img src={Work5} layout='fill' objectFit='cover' alt=" "/>

        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
        justify-center items-center '>
          <span className='text-2xl font-bold text-white tracking-wider'>Stock Market Tracker</span>
          <div className='pt-8 text-center'>
            <a href='/'> <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>Live</button></a>
          </div>

        </div>

      </div>

      <div className='transform transition-transform duration-300 hover:scale-105
       overflow-hidden shawdow-lg shawdow-[#040c16]
        group container rounded-md flex justify-center 
        items-center mx-auto h-[200px] bg-cover relative'>
          <img src={Work3} layout='fill' objectFit='cover' alt=" "/>

        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
        justify-center items-center '>
          <span className='text-2xl font-bold text-white tracking-wider'>To Do List</span>
          <div className='pt-8 text-center'>
            <a href='/'> <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>Live</button></a>
          </div>

        </div>
      </div>

      </div>
    </div>
  
  )
}

export default Work
