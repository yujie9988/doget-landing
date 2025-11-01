import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DoGetSection from './components/DoGetSection'
import ChatSection from './components/ChatSection'
import KTVSection from './components/KTVSection'
import GameSection from './components/GameSection'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <DoGetSection />
      <ChatSection />
      <KTVSection />
      <GameSection />
      <DownloadCTA />
      <Footer />
    </div>
  )
}

export default App
