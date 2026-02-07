import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'
import ParticleBackground from './ParticleBackground'

const Footer = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const supportLinks = [
    { key: 'terms', path: '/terms' },
    { key: 'privacy', path: '/privacy' },
    { key: 'feedback', path: '/feedback' },
  ]

  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '60px 0 0',
      position: 'relative',
    }}>
      <ParticleBackground />
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '50px 0 30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '40px',
            }}
          >
            {/* 品牌區 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                DoGet
              </div>
              <p style={{
                fontSize: '15px',
                opacity: 0.8,
                lineHeight: '1.6',
                margin: 0,
              }}>
                {t.footer.description}
              </p>
            </div>

            {/* 支援連結 - 橫向 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              {supportLinks.map((link, index) => (
                <Link key={index} to={link.path} onClick={() => window.scrollTo(0, 0)} style={{
                  color: 'white',
                  opacity: 0.7,
                  fontSize: '15px',
                  transition: 'opacity 0.3s',
                  textDecoration: 'none',
                }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                >
                  {t.footer.support.items[link.key]}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* 版權信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              paddingTop: '30px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              fontSize: '14px',
              opacity: 0.6,
            }}
          >
            <p>{t.footer.copyright}</p>
            <p style={{ marginTop: '5px' }}>
              {t.footer.madeWith}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
