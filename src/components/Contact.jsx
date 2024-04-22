import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>

      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-400'>Contact Me</h2>
      </div>

        <div className='max-w-[800px] mx-auto'>

            <div className='mt-6 bg-[#161616] rounded-xl'>
                <div className='p-10'>

                    <form action='https://getform.io/f/pagxvvkb' method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='mt-2.5 '>
                                <input type='text' name='' id='' placeholder='Enter Your Name' 
                                className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                 placeholder-gray-400 border border-gray-700 rounded-md 
                                focus:outline-none focus:border-yellow-600'  />
                            </div>

                            <div>
                        <div className='mt-2.5 '>
                                <input type='email' name='' id='' placeholder='Enter Your Email' 
                                className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                 placeholder-gray-400 border border-gray-700 rounded-md 
                                focus:outline-none focus:border-yellow-600'  />
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                        <div className='mt-2.5 '>
                                <textarea type='email' name='' id='' placeholder='Enter Your Message' 
                                className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                 placeholder-gray-400 border border-gray-700 rounded-md 
                                focus:outline-none focus:border-yellow-600'  />
                            </div>
                        </div>

                        

                        </div>

                        
                        <div>
                            <button type='submit' className='text-xl w-full p-4 mt-5 font-semibold text-white  bg-gradient-to-br from-green-600 to-blue-400 hover:bg-gradient-to-bl rounded-2xl'>
                                Send
                            </button>
                        </div>
                        

                        
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
