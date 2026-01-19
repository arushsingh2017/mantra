import React from 'react'
import bg from '../assets/website/common-banner.png'
import { Link } from 'react-router-dom'



export default function Banner({ title, path, dis }) {
    return (
        <>
            {/* <div className='w-full px-4 py-10 bg-sky-100 text-white' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}> */}
             <div className='w-full px-4 py-10 bg-sky-100 text-center'>
                <div className=" py-15 px-4">
                    <div className="max-w-7xl mx-auto ">
                        <nav className="inline-block text-sm text-black bg-white p-4 rounded-md shadow-lg">
                            <ol className="flex items-center">
                                <li>
                                    <Link to="/" className="  hover:text-sky-600">
                                        Home
                                    </Link>
                                </li>

                                <span className="mx-2">/</span>

                                <li className="font-semibold">
                                    {path}
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-3xl font-semibold text-[#498ee1] mb-4 pt-10">
                            {title}
                        </h1>
                        <p>{dis}</p>

                    </div>
                </div>

            </div>
        </>
    )
}
