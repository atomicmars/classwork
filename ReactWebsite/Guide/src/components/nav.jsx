import React, {useState} from 'react'
import '../App.css'



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = true
    }

    console.log(isMenuOpen)

    return (
        <nav className='navbar bg-blue-400 p-4'>
        <div className="navbar flex items-center justify-between">
            {/*Logo*/}
            <img src='/images/omniphotos/academy logo.jfif' height="40" width="40"/>
           <div className="text-white text-left text-2xl font-bold">Omnichannel Quickstart Guide</div>
           
           <div className="md:hidden">
            <button className='text-white' onClick={toggleMenu}>
                <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    viewBox='0 0 24 24'
                    className='w-6 h6'
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
           </div>

           <ul className='navlist hidden md:flex space-x-4'>
            <li><a href="/Homepage" className='text-white'>Home</a></li>
            <li><a href="/InStoreOrders" className='text-white'>BOPIS</a></li>
            <li><a href="/SFSOrders" className='text-white'>SFS</a></li>
            <li><a href="/Processes" className='text-white'>Other Processes</a></li>
            <li><a href="/Tools" className='text-white'>Tools</a></li>
            </ul>         
        </div>

        {/* Menu */}
        {isMenuOpen ? (
            <ul className='navlist flex-col md:hidden'>
            <li className='py-2'><a href="/Homepage" className='text-white'>Home</a></li>
            <li className='py-2'><a href="/InStoreOrders" className='text-white'>BOPIS</a></li>
            <li className='py-2'><a href="/SFSOrders" className='text-white'>SFS</a></li>
            <li className='py-2'><a href="/Processes" className='text-white'>Other Processes</a></li>
            <li className='py-2'><a href="/Tools" className='text-white'>Tools</a></li>

            </ul>
        ) : null}
        </nav>
    )
}

export default Navbar