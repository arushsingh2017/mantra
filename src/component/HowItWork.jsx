import React from 'react'
import howItwork from '../assets/website/howitwork.png'
// import application from '../application-submit.png'

export default function HowItWork() {
    const steps = [
        {
            title: "Application Submission",
            desc: "Fillout and submit a loan application with necessary documents and details on our website",
            status: "completed",
            icon: './applicationreview.svg',
        },
        {
            title: "Application Review",
            desc: "SalaryOnTime reviews your application, conducts credit checks, and verifies your documents.",
            status: "active",
            icon: './applicationrevi1.svg'
        },
        {
            title: "Disbursal Initiation",
            desc: "Upon acceptance of your eligibility, the loan amount is disbursed to your account directly instantly.",
            status: "pending",
            icon: "./disburse.svg",
        },
    ];
    return (
        <>

            <div className='w-full py-20 p-5'>
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Stepper */}
                        <div className="max-w-4xl">
                            <h2 className="text-2xl font-semibold text-emerald-600 mb-3"> How its Work ? </h2>
                            <p className='mb-6'>We are a technology-driven financial platform committed to making personal loans simple, fast, and accessible. </p>

                            {steps.map((step, index) => (
                                <div key={index} className="relative flex gap-6">

                                    {/* Left Timeline */}
                                    <div className="flex flex-col items-center">
                                        {/* Circle */}
                                        <div
                                            className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg
                ${step.status === "completed"
                                                    ? "bg-emerald-500 text-white"
                                                    : step.status === "active"
                                                        ? "bg-cyan-500 text-white"
                                                        : "bg-[#498ee1] text-gray-500"
                                                }`}
                                        >
                                            {/* {step.icon ? step.icon : index + 1} */}
                                            <img src={step.icon} alt='icon' width="40px" height="40px" className='text-white'/>
                                        </div>

                                        {/* Vertical Line */}
                                        {index !== steps.length - 1 && (
                                            <div className="w-px h-20 bg-gray-300 mt-2"></div>
                                        )}
                                    </div>

                                    {/* Right Content */}
                                    <div className="pb-10">
                                        <h3 className="font-semibold text-lg text-gray-800">
                                            {step.title}
                                        </h3>
                                        <p className="text-base text-gray-500 mt-1">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Image */}
                        <div className="flex justify-center">
                            <img
                                src={howItwork}
                                alt="How it works"
                                className="w-full max-w-md"
                            />
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}
