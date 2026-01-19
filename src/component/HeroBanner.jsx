import React from 'react'
import heroImg from '../assets/website/heroImg.png'
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';

export default function HeroBanner() {
    return (
        <>
            <section className="bg-sky-100 py-0 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 leading-tight">
                            PERSONAL LOAN  <span className='text-[#498ee1]'>AT YOUR DOORSTEP</span>
                        </h1>

                        

                        {/* Steps */}
                        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">

                            {/* Step 1 */}
                            <div className="text-center">
                                <div className="mx-auto w-20 h-20 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center mb-3">
                                    {/* <span className="text-emerald-600 font-bold">01</span> */}
                                    <RealEstateAgentIcon className='text-white' style={{fontSize:'40px'}}/>
                                </div>
                                <p className="font-semibold text-lg">Request for a Loan</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Submit basic details to apply
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center">
                                <div className="mx-auto w-20 h-20 rounded-full bg-emerald-600 shadow flex items-center justify-center mb-3">
                                    {/* <span className="text-emerald-600 font-bold">02</span> */}
                                     <RealEstateAgentIcon className='text-white' style={{fontSize:'40px'}}/>
                                </div>
                                <p className="font-semibold text-lg">Get the Loan Valued</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Instant eligibility check
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center " >
                                <div className="mx-auto w-20 h-20 rounded-full bg-emerald-600 shadow flex items-center justify-center mb-3">
                                    {/* <span className="text-emerald-600 font-bold text-3xl " style={{position:'absolute', top:'0', left:'0'}}>03</span> */}
                                     <RealEstateAgentIcon className='text-white' style={{fontSize:'40px'}}/>
                                </div>
                                <p className="font-semibold text-lg">Get Money Instantly</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Amount credited to bank
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={heroImg}
                            alt="Personal Loan"
                            className="w-full max-w-4xl object-contain"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
