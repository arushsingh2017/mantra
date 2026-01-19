import React from 'react'
import RupeeImg from "../assets/website/loanpic.jpg";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Icon } from '@mui/material';

export default function LoanBenefits() {
    const benefits = [
  {
    title: "Instant Approval",
    desc: "Quick approval process with minimal documentation",
    icon: <VerifiedIcon className='text-[#498ee1]' style={{fontSize:'50px'}}/>
  },
  {
    title: "Competitive Interest",
    desc: "Affordable interest rates tailored to your profile",
    icon: <VerifiedIcon className='text-[#498ee1]' style={{fontSize:'50px'}}/>
  },
  {
    title: "Flexible Tenure",
    desc: "Choose repayment tenure as per your comfort",
    icon: <VerifiedIcon className='text-[#498ee1]' style={{fontSize:'50px'}}/>
  },
  {
    title: "Minimal Documentation",
    desc: "Hassle-free application with fewer documents",
    icon: <VerifiedIcon className='text-[#498ee1]' style={{fontSize:'50px'}}/>
  },
  {
    title: "Transparent Process",
    desc: "No hidden charges, complete clarity",
    icon: <VerifiedIcon className='text-[#498ee1]' style={{fontSize:'50px'}}/>
  },
  {
    title: "100% Online",
    desc: "Apply and track loan fully online",
    icon: <VerifiedIcon className='text-[#498ee1]' style={{fontSize:'50px'}}/>
  }

];
  return (
    <>
      <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            Benefits of Personal Loan
          </h2>
          <p className='mb-6'>We are a technology-driven financial platform committed to making personal loans simple, fast, and accessible. Our digital-first approach ensures quick approvals with minimal documentation.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white text-center border border-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
              <p>
                {item.icon} </p>
                <h4 className="text-base font-semibold text-emerald-600 mb-1 pt-3 text-center">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-4 flex justify-center bg-emerald-600">
          <div className=" w-full flex items-center justify-center">
            <img
              src={RupeeImg}
              alt="Loan Benefits"
              className=""
            />
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
