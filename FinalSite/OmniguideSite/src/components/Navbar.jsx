import React, {useState} from 'react'
import { AIOutlineMenu, AIOutlineHome } from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AIOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href="main" className='w-[75%] flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AIOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#BOPIS" className='w-[75%] flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>BOPIS</span>
                        </a>
                        <a href="#SFS" className='w-[75%] flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AIOutlineHome size={20} />
                            <span className='pl-4'>SFS</span>
                        </a>
                        <a href="#STS" className='w-[75%] flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AIOutlineHome size={20} />
                            <span className='pl-4'>STS</span>
                        </a>
                        <a href="#Curb" className='w-[75%] flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AIOutlineHome size={20} />
                            <span className='pl-4'>Pick-Up</span>
                        </a>
                        <a href="#OmniTools" className='w-[75%] flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AIOutlineHome size={20} />
                            <span className='pl-4'>Tools</span>
                        </a>
                    </div>
                ) : (
                    ''
                )}
                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <a href="main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AIOutlineHome size={20}/>
                        </a>
                        <a href="#BOPIS" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AIOutlineHome size={20}/>
                        </a>
                        <a href="#SFS" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AIOutlineHome size={20}/>
                        </a>
                        <a href="#STS" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AIOutlineHome size={20}/>
                        </a>
                        <a href="#Curb" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AIOutlineHome size={20}/>
                        </a>
                        <a href="#OmniTools" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AIOutlineHome size={20}/>
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;
