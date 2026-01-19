import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import RepaymentSteps from '../component/RepaymentSteps'
import Footer from '../component/Footer'

export default function RepayLoan() {
  return (
    <>
      <Header />
      <Banner
        title="Simple & Secure Loan Repayment"
        dis="Pay your dues on time with our fast and reliable repayment system."
        path="Repay Loan"
      />
      <div className=' bg-sky-100 pb-10' style={{ marginTop: '-60px' }}>
        <div className='max-w-lg m-auto grid grid-cols-1 w-full bg-white shadow-lg rounded-lg p-5'>
          <p className="text-lg mb-2 opacity-90 ">
            Enter your PAN
          </p>

          <input
            type="text"
            placeholder="10 Digit PAN No."
            className="w-full rounded-lg p-3 mb-4 border border-emerald-500 text-black focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button className="w-full bg-[#498ee1] hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition">
           Get OTP
          </button>
        </div>
      </div>

      <RepaymentSteps/>
      <Footer/>
    </>
  )
}
