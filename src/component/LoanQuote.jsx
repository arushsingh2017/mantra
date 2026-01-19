import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import addImg from '../assets/website/upload.mp4'



export default function LoanQuote() {
    const [tenure, setTenure] = useState("");
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-8 rounded-lg p-4">
                    <Box>
                        <div className='flex justify-between mb-2 pt-3 '>
                            <h3 className='text-lg font-semibold '>Loan Amount</h3>
                            <span className='ml-3 text-xl font-bold'>₹50,000</span>
                        </div>
                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            sx={{
                                color: '#02a86b',
                                height: 10,
                                "& .MuiSlider-thumb": {
                                    width: 30,
                                    height: 30,
                                    backgroundColor: '#498dac',
                                    border: "7px solid #235496",
                                    "&:hover, &.Mui-focusVisible, &.Mui-active":
                                    {
                                        boxShadow: "0px 0px 0px 8px rgba(0, 0, 0, 0.16)"
                                    }

                                },
                            }}
                        />
                        <div className='flex justify-between'>
                            <span className='text-sm font-sm '>₹5000</span>
                            <span className='text-sm font-sm '>₹1,00,000</span>
                        </div>

                    </Box>

                    <Box>
                        <div className='flex justify-between mb-2 pt-3 '>
                            <h3 className='text-lg font-semibold '>Tenure</h3>
                            <span className='ml-3 text-xl font-bold'>40 Days</span>
                        </div>
                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            sx={{
                                color: '#02a86b',
                                height: 10,
                                "& .MuiSlider-thumb": {
                                    width: 30,
                                    height: 30,
                                    backgroundColor: '#498dac',
                                    border: "7px solid #235496",
                                    "&:hover, &.Mui-focusVisible, &.Mui-active":
                                    {
                                        boxShadow: "0px 0px 0px 8px rgba(0, 0, 0, 0.16)"
                                    }

                                },
                            }}
                        />
                        <div className='flex justify-between'>
                            <span className='text-sm font-sm '>7 Days</span>
                            <span className='text-sm font-sm '>40 Days</span>
                        </div>

                    </Box>

                    <div className='flex justify-between mb-2 pt-3 '>
                        <h3 className='text-lg font-semibold '> Loan Purpuse</h3>
                    </div>

                    <select
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className="w-full  pr-2 py-2  focus:ring-2 focus:ring-sky-500 outline-none"
                    >
                        <option value="">Select tenure</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="9">9 Months</option>
                        <option value="12">12 Months</option>
                    </select>



                    {/* summery section start */}
                    <div className="w-full border border-gray-200 py-4 mt-5 px-4 rounded-lg shadow-lg">
                        <div className="max-w-6xl mx-auto">
                            {/* Top Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

                                {/* Eligible Amount */}
                                <div className="bg-[#5a6fa3] text-white rounded-lg p-2 shadow-md">
                                    <p className="text-sm opacity-80">Eligible Amount</p>
                                    <h3 className="text-lg font-semibold mt-2">₹ 40,000</h3>
                                </div>

                                {/* Tenure Day */}
                                <div className="bg-[#b7c9e6] text-black rounded-lg p-2 shadow-md">
                                    <p className="text-sm opacity-80">Tenure Day</p>
                                    <h3 className="text-lg font-bold mt-2">₹ 40</h3>
                                </div>

                                {/* Processing Fee */}
                                <div className="bg-[#d9c7db] text-black rounded-lg p-2 shadow-md">
                                    <p className="text-sm opacity-80">Processing Fee</p>
                                    <h3 className="text-lg font-bold mt-2">₹ 10%</h3>
                                </div>

                            </div>

                            {/* Total Repayment */}
                            <div className="mt-4">

                                <div className="bg-[#498ee1] rounded-xl p-4 flex flex-col sm:flex-row
                          items-center justify-between shadow-md">
                                    <p className="text-lg text-white font-bold opacity-80 mt-3 sm:mt-0">
                                        Total Repayment Amount
                                    </p>
                                    <h3 className="text-3xl font-bold text-white">
                                        ₹ 40,000
                                    </h3>


                                </div>
                            </div>

                        </div>
                    </div>
                    {/* end */}

                    <button className='w-full mt-10 bg-emerald-500 hover:bg-emerald-700 text-white
                   font-semibold py-3 rounded-lg transition uppercase'>Accept Loan</button>

                </div>

                <div className="lg:col-span-4 p-2">
                    <video
                        src={addImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-xl border border-sky-200"
                    >
                    </video>
                </div>
            </div>

        </>
    )
}
