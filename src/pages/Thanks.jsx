import React from 'react'
import Header from '../component/Header'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Thanks() {
    return (
        <>
            {/* <Header/> */}
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-500 to-yellow-200 px-4">

                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-3xl w-full text-center">

                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-400 flex items-center justify-center">
                            <CheckCircleOutlineIcon className='text-white' style={{fontSize:'50px'}}/>
                        </div>
                    </div>
                   
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                       Thanks for Applying!
                    </h1>

                    
                    <p className="text-sm sm:text-lg font-medium text-gray-600 ">
                        Your loan application has been successfully submitted.
                    </p>

                    <p className='text-base mb-6'>Our team is reviewing your details, and we’ll keep you updated on the progress.</p>
                    <p>If you need any assistance or have questions, our support team is always here to help.</p>

                    {/* Button */}
                    <button className="bg-emerald-500 mt-10 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition">
                        Go to Dashboard
                    </button>

                </div>

            </div>
        </>
    )
}
