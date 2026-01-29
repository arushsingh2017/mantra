import React from 'react'
// import { Bell, CreditCard, Wallet } from "lucide-react";

export default function ProfileCard() {
  return (
    <>
       <div className="bg-white rounded-3xl p-6 w-full max-w-sm mx-auto shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Your Profile
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          ⋮
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6 relative">
        <div className="relative w-32 h-32">
          
          {/* Gray Circle */}
          <div className="absolute inset-0 rounded-full border-[10px] border-gray-200" />

          {/* Purple Progress Arc */}
          <div className="absolute inset-0 rounded-full border-[10px] border-transparent border-t-purple-600 border-r-purple-600 rotate-45" />

          {/* Avatar */}
          <img
            src="/profile.jpg" // replace with your image
            alt="Profile"
            className="absolute inset-3 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Good Morning Prashant
        </h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          Continue Your Journey And Achieve Your Target
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-6 mt-6">
        {/* <ActionIcon icon={<Bell />} />
        <ActionIcon icon={<CreditCard />} />
        <ActionIcon icon={<Wallet />} /> */}
      </div>

      {/* Bottom Indicator */}
      <div className="flex justify-center mt-6">
        <span className="w-8 h-1 bg-pink-500 rounded-full" />
      </div>
    </div>


    </>
  )
}

const ActionIcon = ({ icon }) => (
  <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
    {icon}
  </div>
);

