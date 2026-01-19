import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import logo from '../assets/website/logo.png'


export default function Footer() {
  return (
    <>
      <footer className="bg-[#498ee1] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <span className="text-2xl font-bold">₹</span>
            <h3 className="text-xl font-semibold">Rupee Mitra</h3> */}
              <Link to='/'> <img
                src={logo}
                alt="logo"
                className="w-[150px] sm:w-[200px] mx-auto"
              />
              </Link>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Reference site about Lorem Ipsum, giving information on its origins,
              well as a random Lipsum generator.
            </p>
            <p className="text-xs text-blue-200 mt-4">
              © 2026. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="text-sm text-blue-100">
              <li> <Link to='/'> Home </Link> </li>
              <li className='pt-2'>
                <Link to='/about'>About Us </Link>
              </li>
              <li className='pt-2'>
                <Link to='/faqs'>FAQS</Link>
              </li>
              <li className='pt-2'>
                <Link to='/repay-loan'>Repay-Loan </Link>
              </li>
              <li className='pt-2'>
                <Link to='/contact'> Contact Us1 </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>FAQs</li>
              <li>Rate and Terms</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-blue-100">
              Phone : +91-0000 00 000
            </p>
            <p className="text-sm text-blue-100 mt-1">
              Email : info@yourdomain.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a className="w-9 h-9 bg-white text-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition">
                <FacebookIcon />
              </a>
              <a className="w-9 h-9 bg-white text-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition">
                <LinkedInIcon />
              </a>
              <a className="w-9 h-9 bg-white text-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition">
                <YouTubeIcon />
              </a>
              <a className="w-9 h-9 bg-white text-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition">
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
