import React, { useState } from 'react'
import logo from '../assets/website/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';




export default function Header() {
    const [open, setOpen] = useState(false);
    const [sidemenuopen, setSidemenuopen] = useState(false);
    return (
        <>
            <header className="w-full bg-white-800 text-black bg-white shadow-md sticky top-0 z-50">
                <div className="mx-auto flex items-center justify-between">

                    {/* Logo */}
                   <Link to='/'> <img src={logo} alt="Logo" style={{ width: '190px', height: '80px', padding: '6px' }} /> </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex space-x-6 px-5 " style={{ alignItems: 'center' }}>
                        <Link to='/' className=" text-base font-medium uppercase hover:text-[#02a86b]">Home</Link>
                        <Link to="/about" className="text-base font-medium  uppercase hover:text-[#02a86b]">About Us</Link>
                        <Link to="/faqs" className="text-base font-medium  uppercase hover:text-[#02a86b]">FAQ</Link>
                        <Link to="/repay-loan" className="text-base font-medium  uppercase hover:text-[#02a86b]">Repay-Loan</Link>
                        <Link to="/contact" className="text-base font-medium  uppercase hover:text-[#02a86b]">Contact Us</Link>
                        <Link to="/" className="text-lg font-bold  uppercase hover:text-[#02a86b]"> <CallIcon className='text-[#02a86b]' /> +91: 0000-00-0000</Link>

                        <div className='align-items-center'>
                            <Link to='/apply-now'>
                                <button className="bg-[#498ee1] text-white px-4 py-2 rounded-[30px] text-lg font-medium">
                                    Apply Now <KeyboardArrowRightIcon />
                                </button>
                            </Link>




                        </div>



                    </nav>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden focus:outline-none px-4"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {open ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <nav className="lg:hidden bg-gray-700 px-4 pb-4 space-y-2 text-white">
                        <a href="#" className="block py-2 hover:text-red-400">Home</a>
                        <a href="#" className="block py-2">About Us</a>
                        <a href="#" className="block py-2">Our Services</a>
                        <a href="#" className="block py-2">Source City</a>
                        <a href="#" className="block py-2">Blog</a>
                        <a href="#" className="block py-2">Repay-Loan</a>
                        <a href="#" className="block py-2">Contact Us</a>
                    </nav>

                )}
            </header>


        </>
    )
}
