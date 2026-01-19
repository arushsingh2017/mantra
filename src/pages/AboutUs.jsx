import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import aboutmg from '../assets/website/aboutImg.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import StatsSection from '../component/StatsSection'


const statsData = [
  { label: "Happy Customers", value: 50000, suffix: "+" },
  { label: "Loans Disbursed", value: 120, suffix: "Cr+" },
  { label: "Approval Rate", value: 98, suffix: "%" },
  { label: "Years of Trust", value: 10, suffix: "+" },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 30));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}


export default function AboutUs() {


  return (
    <>
      <Header />
      <Banner
        title="Everything You Need to Know"
        dis="Clear answers and helpful information to guide your loan journey."
        path="About Us"
      />

      <div className="">

        {/* WHO WE ARE */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed pb-5">
                We are a technology-driven financial platform committed to making
                personal loans simple, fast, and accessible. Our digital-first
                approach ensures quick approvals with minimal documentation.
              </p>
              <p className="text-gray-600 leading-relaxed pb-5">
                We are a technology-driven financial platform committed to making
                personal loans simple, fast, and accessible. Our digital-first
                approach ensures quick approvals with minimal documentation.
              </p>
              <p className="text-gray-600 leading-relaxed pb-5">
                We are a technology-driven financial platform committed to making
                personal loans simple, fast, and accessible. Our digital-first
                approach ensures quick approvals with minimal documentation.
              </p>
            </div>

            <div className="rounded-xl shadow p-3">
              <img src={aboutmg} alt='About Compant' className='rounded-xl' />

            </div>
          </div>
        </section>

        <section className="bg-sky-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-600">
                Our Vision & Mission
              </h2>
              <p className="text-gray-500 mt-3">
                Driving innovation, trust, and transparency in financial services.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Vision */}
              <div className="bg-gray-50 rounded-xl p-8 border hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <VisibilityIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Our Vision
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted digital lending platform by delivering
                  transparent, secure, and customer-centric financial solutions.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gray-50 rounded-xl p-8 border hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                    <VisibilityIcon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Our Mission
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  To simplify borrowing through technology, ensure quick access to
                  credit, and empower users with responsible financial choices.
                </p>
              </div>

            </div>
          </div>
        </section>

     <StatsSection/>
      
      </div>
      <Footer />
    </>
  )
}
