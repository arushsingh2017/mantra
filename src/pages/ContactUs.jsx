import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Info from '../component/Info'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BusinessIcon from '@mui/icons-material/Business';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import Footer from '../component/Footer';


export default function ContactUs() {
  return (
    <>
      <Header />
      <Banner
        title="Reach Out to Us Anytime"
        dis="Instant digital loans with transparent terms and customer-first experience."
        path="Contact" />



      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SECTION */}
          <div className="space-y-8 ">

            <Info
              icon={<BusinessIcon />}
              title="OUR REGISTERED ADDRESS"
              text="Building No. 10, Community Centre No. II, Ashok Vihar Phase - II, North West Delhi, India, 110052"
            />

            <Info
              icon={<MailIcon />}
              title="Mail ID"
             text={
                <>                 
                  <p className="mt-1">info@testETETERTE@GMAIL.COM</p>
                </>
              }
            />

            <Info
              icon={<CallIcon />}
              title="CONTACT US"
              text={
                <>
                  <p>+91 00000 11111</p>
                  
                </>
              }
            />
          </div>

          {/* RIGHT SECTION – FORM */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Have <span className="text-[#498ee1]">Any Questions?</span>
            </h2>

            <p className="text-gray-600 mt-2 mb-6">
              Have any query or want to enquire about the services we provide?
              Fill out the contact form below and our team will get back to you as soon as possible.
            </p>

            <form className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg mb-2 opacity-90 ">
                    Enter your PAN
                  </p>

                  <input
                    type="text"
                    placeholder="10 Digit PAN No."
                    className="w-full rounded-lg p-3 mb-4 border border-emerald-500 text-black focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <p className="text-lg mb-2 opacity-90 ">
                    Enter your PAN
                  </p>

                  <input
                    type="text"
                    placeholder="10 Digit PAN No."
                    className="w-full rounded-lg p-3 mb-4 border border-emerald-500 text-black focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg mb-2 opacity-90 ">
                    Enter your PAN
                  </p>

                  <input
                    type="text"
                    placeholder="10 Digit PAN No."
                    className="w-full rounded-lg p-3 mb-4 border border-emerald-500 text-black focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <p className="text-lg mb-2 opacity-90 ">
                    Enter your PAN
                  </p>

                  <input
                    type="text"
                    placeholder="10 Digit PAN No."
                    className="w-full rounded-lg p-3 mb-4 border border-emerald-500 text-black focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              {/* <Textarea label="Message" /> */}
              <textarea                
                placeholder=""
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   resize-none"
              />

             

              {/* SUBMIT */}
              <button
                type="submit"
                className="bg-[#498ee1] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium w-full md:w-fit"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </section>

      <Footer/>


    </>
  )
}
