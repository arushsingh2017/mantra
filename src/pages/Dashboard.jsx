import React from 'react'
import Ekyc from '../component/Ekyc'
import CurrentLoan from '../component/CurrentLoan'
import ProfileCard from '../component/ProfileCard'

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
      
      {/* LEFT SIDEBAR (Fixed) */}
      <aside className="w-64 bg-gray-900 text-white fixed left-0 top-0 h-screen">
        <div className="p-6 text-xl font-semibold border-b border-gray-700">
          Dashboard
        </div>

        {/* <nav className="p-4 space-y-3">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Users
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Loans
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Settings
          </a>
        </nav> */}
         <ProfileCard/>
      </aside>

      {/* RIGHT CONTENT (Scrollable) */}
      <main className="ml-64 flex-1 overflow-y-auto bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold mb-6">
          Dashboard Content
        </h1>

        {/* Example content */}
        <div className="space-y-6">
           
            <CurrentLoan/>
          <Ekyc/>
        </div>
      </main>
    </div>
    </>
  )
}
