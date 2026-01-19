import React, { useState } from 'react'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const steps = [
  {
    title: "Verify Your Details",
    desc: "Enter your PAN and registered mobile number to securely identify your loan.",
    icon: <CheckCircleOutlineIcon />
  },
  {
    title: "View Outstanding Amount",
    desc: "Check your total payable amount, due date, and repayment breakdown instantly.",
    icon: <CheckCircleOutlineIcon />
  },
  {
    title: "Choose Payment Method",
    desc: "Select UPI, debit card, net banking, or auto-debit for repayment.",
    icon: <CheckCircleOutlineIcon />
  },
  {
    title: "Make Payment",
    desc: "Complete the payment securely in just a few clicks.",
    icon: <CheckCircleOutlineIcon />
  },
  {
    title: "Get Confirmation",
    desc: "Receive instant payment confirmation and updated loan status.",
    icon: <CheckCircleOutlineIcon />
  }
];

export default function RepaymentSteps() {
  return (
    <>
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Here’s How Our Loan Repayment Works
          </h2>
          <p className="text-gray-500 mt-2">
            Simple, secure, and hassle-free repayment process
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>

              <h3 className="font-semibold text-lg text-gray-800">
                Step {index + 1}: {step.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
