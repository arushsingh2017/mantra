import React from 'react'
import Header from '../component/Header'
import PanBoxInput from '../component/PanBoxInput'

export default function LoanEligibility() {
  return (
    <>

      <div className='min-h-screen w-full bg-sky-100'>
        <Header/>

        <div className="max-w-7xl mx-auto p-4 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* LEFT – PAN INPUT */}
            <div className="lg:col-span-7 bg-sky-500 rounded-xl">
              <PanBoxInput />
            </div>

            {/* RIGHT – CONTENT */}
            <div className="lg:col-span-5 p-4 bg-sky-700 rounded-xl text-white">
              two
            </div>

          </div>
        </div>





      </div>
    </>
  )
}
