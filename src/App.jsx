import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Navbar/Header'
import Dashboard from '../Navbar/Dashboard'
import Footer from '../Navbar/Footer'
import Features from '../Navbar/Page2/Features'
import TestimonialCard from '../Navbar/Page2/TestimonialCard'
import DashboardUI from '../Navbar/Page2/DashboardUI'
import FAQSection from '../Navbar/Page3/FAQSection'
import Footer1 from '../Navbar/Page3/Footer1'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Dashboard></Dashboard>
      <Footer></Footer>
      <Features></Features>
      <TestimonialCard></TestimonialCard>
      <DashboardUI></DashboardUI>
      <FAQSection></FAQSection>
      <Footer1></Footer1>
    </div>
  )
}

export default App