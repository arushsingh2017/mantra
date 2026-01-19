import React from 'react'
import Header from '../component/Header'
import HeroBanner from '../component/HeroBanner'
import LoanBenefits from '../component/LoanBenefits'
import HowItWork from '../component/HowItWork'
import FindLoan from '../component/FindLoan'
import AppScreen from '../component/AppScreen'
import Faqs from '../component/Faqs'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'
import LoanCalculator from '../component/LoanCalculator'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner/>
      <LoanBenefits/>
      <LoanCalculator/>
      <HowItWork/>
      <FindLoan/>
      <AppScreen/>
      <Faqs/>
      {/* <Testimonial/> */}
      <Footer/>
      

    </div>
  )
}
