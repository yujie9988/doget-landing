import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import HomePage from './components/HomePage'
import FeaturesPage from './components/FeaturesPage'
import TermsPage from './components/TermsPage'
import PrivacyPage from './components/PrivacyPage'
import FeedbackPage from './components/FeedbackPage'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
