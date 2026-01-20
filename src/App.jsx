
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Home from './pages/Home';
import ApplyNow from './ApplyNow';
import LoanEligibility from './pages/LoanEligibility';
import LoanApplication from './pages/LoanApplication';
import Thanks from './pages/Thanks';
import AboutUs from './pages/AboutUs';
import RepayLoan from './pages/RepayLoan';
import ContactUs from './pages/ContactUs';
import FaqsPages from './pages/FaqsPages';
import OtpVerify from './pages/OtpVerify';


function App() {
  return (
    <>

   
       <Routes>
        <Route path='apply-now' element={<ApplyNow/>}></Route>
        <Route path='/otp-verify' element={<OtpVerify/>}></Route>
        
        
       <Route path='/' element={<Home/>}> </Route>
       <Route path='/about' element={<AboutUs/>}></Route>
       <Route path='/faqs' element={<FaqsPages/>}></Route>
       <Route path='/repay-loan' element={<RepayLoan/>}></Route>
       <Route path='/contact' element={<ContactUs/>}></Route>
       <Route path='loan-eligibility' element={<LoanEligibility/>}></Route>
       <Route path='loan-application' element={<LoanApplication/>}></Route>
       <Route path='thankyou' element={<Thanks/>}></Route>
       
      </Routes>


     

    </>
  )
}

export default App
