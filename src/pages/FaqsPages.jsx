import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Faqs from '../component/Faqs'

export default function FaqsPages() {
  return (
    <>
      <Header />

      <Banner
        title="Have Questions? We’ve Got Answers"
        dis="Explore detailed answers to help you understand our loan services better."
        path="Faqs"
      />
      <Faqs />
      <Footer />
     
    </>

  )
}
