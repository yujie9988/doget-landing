import React from 'react'
import Navbar from './Navbar'
import ComparisonSection from './ComparisonSection'
import DoGetSection from './DoGetSection'
import KTVSection from './KTVSection'
import GameSection from './GameSection'
import DownloadCTA from './DownloadCTA'
import Footer from './Footer'

const FeaturesPage = () => {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <ComparisonSection />
        <DoGetSection />
        <KTVSection />
        <GameSection />
        <DownloadCTA />
      </div>
      <Footer />
    </div>
  )
}

export default FeaturesPage
