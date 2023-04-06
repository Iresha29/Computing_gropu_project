import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="flex" >
        <div className="xl:mx-auto fixed h-screen bg-blue-500 flex-row md:gap-8 shadow-xl xl:text-lg top-16">
            <div>

                <div className="xl:inline-block text-black text-left text-lg flex-col flex">
                    <a href='#'>
                        <h1 className='py-2 px-4 hover:font-bold border-b border-blue-500'>Home</h1>
                    </a>
                    <a href='#'>
                        <h1 className='py-2 px-4 hover:font-bold border-b border-blue-500'>Appointments</h1>
                    </a>
                    <a href='#'>
                        <h1 className='py-2 px-4 hover:font-bold border-b border-blue-500'>Appointments History</h1>
                    </a>
                    <a href='#'>
                        <h1 className='py-2 px-4 hover:font-bold cursor-pointer border-b border-blue-500'>Profile</h1>
                    </a>
                    <a href='#'>
                        <h1 className='py-2 px-4 hover:font-bold cursor-pointer border-b border-blue-500'>About</h1>
                    </a>
                    <a href='#'>
                        <h1 className='py-2 px-4 hover:font-bold cursor-pointer border-b border-blue-500'>Contact us</h1>
                    </a>
                </div>

            </div>

            <div className='py-2 px-4 hover:font-bold text-left cursor-pointer border-blue-500'>
                <input type='search' name='search' placeholder='Search' className='bg-blue-500 rounded-2xl placeholder-slate-800 outline-none block w-48'></input>
            </div>
            
        </div>
                
    </div>
    </>
  )
}

export default Sidebar
