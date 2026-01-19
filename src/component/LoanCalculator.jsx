import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function LoanCalculator() {
  const [amount, setAmount] = useState(5000);
  const [tenure, setTenure] = useState(60);

  const interest = Math.round(amount * 0.6);
  const total = amount + interest;

  return (
    <>
      <section className="bg-sky-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SECTION */}
          <div>
            <p className="text-sm text-gray-700 font-semibold">Personal Loan Calculator</p>
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mt-1">
              Know Your Loan Eligibility
            </h2>

            {/* Principal */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold">Principal</label>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-md text-sm font-semibold" >
                  ₹ {amount.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span className='font-semibold'>5k</span>
                <span className='font-semibold'>1L</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold">Tenure</label>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {tenure}
                </span>
              </div>

              <input
                type="range"
                min={60}
                max={365}
                step={5}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span className='font-semibold'>60 Days</span>
                <span className='font-semibold'>365 Days</span>
              </div>
            </div>

            {/* CTA */}
            <Link to='apply-now'>
              <button className="mt-10 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold">
                Apply Now
              </button>
            </Link>
          </div>

          {/* RIGHT SUMMARY CARD */}
          <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 rounded-3xl shadow-lg overflow-hidden">

            {/* Image Placeholder */}
            <div className="flex justify-center py-8">
              <div className="w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center text-5xl font-bold">
                ₹
              </div>
            </div>

            {/* Summary */}
            <div className="px-6 pb-6 space-y-4">
              <div className="flex justify-between bg-white rounded-xl px-4 py-3 font-semibold">
                <span>Principal Amount</span>
                <span className="text-emerald-600">
                  ₹{amount.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between bg-white rounded-xl px-4 py-3 font-semibold">
                <span>Interest Amount</span>
                <span className="text-emerald-600">
                  ₹{interest.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="bg-emerald-500 text-white px-6 py-4 flex justify-between font-bold text-lg">
              <span>Total Payable</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
