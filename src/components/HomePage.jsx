import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import DownloadCTA from './DownloadCTA'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <DownloadCTA />
      <Footer />
    </div>
  )
}

export default HomePage
