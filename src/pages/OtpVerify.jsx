import React from 'react'
import logo from '../assets/website/logo.png'
import OtpScreen from '../component/OtpScreen'
import { Link } from 'react-router-dom';


export default function OtpVerify() {
    const keyFeaturesData = [
        {
            id: 1,
            title: "Instant Loan Approval",

        },
        {
            id: 2,
            title: "Paperless Process",

        },
        {
            id: 3,
            title: "Flexible Repayment",

        },
        {
            id: 4,
            title: "Secure & Transparent",

        },
        {
            id: 5,
            title: "Loan Enhancement",

        },
        {
            id: 6,
            title: "Apply Anytime, Anywhere",

        }

    ];
    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="w-full max-w-[900px] lg:h-[600px] rounded-2xl shadow-xl overflow-hidden border border-gray-300 bg-white">

                    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

                        {/* LEFT COLUMN – KEY FEATURES */}
                        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                            <div className="text-center mb-6">
                                <Link to='/'> <img
                                    src={logo}
                                    alt="logo"
                                    className="w-[150px] sm:w-[200px] mx-auto"
                                />
                                </Link>
                            </div>

                            <h2 className="text-xl sm:text-2xl font-bold pb-4">
                                Key Features
                            </h2>

                            <ul className="space-y-3 text-sm sm:text-base">
                                <li>✔ Instant loan approval</li>
                                <li>✔ Loan up to ₹2,00,000</li>
                                <li>✔ No collateral required</li>
                                <li>✔ Flexible repayment options</li>
                                <li>✔ Secure & paperless process</li>
                            </ul>
                        </div>

                        {/* RIGHT COLUMN – APPLY LOAN */}
                        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                            <OtpScreen/>

                           

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
