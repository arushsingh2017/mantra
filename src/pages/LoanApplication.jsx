import React, { useState } from 'react'
import Header from '../component/Header';
import LoanQuote from '../component/LoanQuote';
import PersonalDetails from '../component/PersonalDetails';
import Documents from '../component/Documents';


export default function LoanApplication() {
    const steps = [
        {
            id: 1,
            stepname: "Loan Calculation",
            shortdis: 'Please enter your PAN Card number. Your identity is secure with us.',
            content: <LoanQuote/>
        },
        {
            id: 2,
            stepname: "Personal Details",
            shortdis: 'Please enter your PAN Card number. Your identity is secure with us.',
            content: <PersonalDetails/>
        },
        {
            id: 3,
            stepname: "Documents Upload",
            shortdis: 'Please enter your PAN Card number. Your identity is secure with us.',
            content: <Documents/>
        },
        // {
        //     id: 4,
        //     stepname: "Bank Details",
        //     shortdis: 'Please enter your PAN Card number. Your identity is secure with us.',
        //     content: "Account & IFSC verification"
        // },

    ];


    const [activeTab, setActiveTab] = useState(1);
    return (
        <>

            <div className='min-h-screen w-full bg-sky-100 '>
                {/* <Header/> */}

                <div className="max-w-7xl mx-auto gap-4 p-2 pt-10 rounded-md">
                    <div className="flex flex-col md:flex-row gap-5">

                        {/* TABS */}
                        <div className="md:w-1/4 border-b md:border-b-0 ">
                            {steps.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                w-full text-left px-4 py-3 text-sm font-medium
                transition 
                ${activeTab === tab.id
                                            ? "bg-sky-600 text-white shap-icon"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }
              `}
                                >
                                    <h4 className='text-lg font-medium'>{tab.stepname}</h4>
                                    <p className=' pt-3 text-[12px]'>{tab.shortdis}</p>
                                </button>
                            ))}
                        </div>

                        {/* CONTENT */}
                        <div className="md:w-3/4 p-6 bg-white rounded-lg  gap-3 ">
                            {steps.map(
                                (tab) =>
                                    activeTab === tab.id && (
                                        <div key={tab.id}>                                           
                                            <p className="text-gray-600">{tab.content}</p>
                                        </div>
                                    )
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
