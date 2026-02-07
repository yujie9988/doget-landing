import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'
import Navbar from './Navbar'
import Footer from './Footer'
import ParticleBackground from './ParticleBackground'

const TermsPage = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <div className="App">
      <Navbar />
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}>
        <ParticleBackground />

        <div className="container" style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          padding: '40px 20px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {t.termsPage.title}
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: 'rgba(255, 255, 255, 0.8)',
            }}>
              {t.termsPage.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 50px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            {t.termsPage.sections.map((section, index) => (
              <div key={index} style={{ marginBottom: index < t.termsPage.sections.length - 1 ? '30px' : 0 }}>
                {section.heading && (
                  <h2 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '12px',
                  }}>
                    {section.heading}
                  </h2>
                )}
                <p style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '16px',
                  lineHeight: '1.8',
                }}>
                  {section.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default TermsPage
