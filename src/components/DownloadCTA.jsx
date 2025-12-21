import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'
import ParticleBackground from './ParticleBackground'

const DownloadCTA = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section id="download" className="section" style={{
      backgroundColor: '#1f2937',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <ParticleBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '30px',
            padding: 'clamp(40px, 8vw, 80px) clamp(20px, 6vw, 60px)',
            textAlign: 'center',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(50px, 10vw, 80px)',
                marginBottom: '30px',
              }}
            >
              {t.downloadCTA.icon}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                marginBottom: '20px',
                fontWeight: '800',
              }}
            >
              {t.downloadCTA.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontSize: 'clamp(16px, 3vw, 20px)',
                marginBottom: '40px',
                opacity: 0.95,
                maxWidth: '600px',
                margin: '0 auto 40px',
              }}
            >
              {t.downloadCTA.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: 'white',
                  color: '#6366f1',
                  padding: 'clamp(14px, 2vw, 18px) clamp(28px, 5vw, 45px)',
                  borderRadius: '30px',
                  fontSize: 'clamp(15px, 2.5vw, 18px)',
                  fontWeight: '600',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: 'clamp(20px, 3vw, 24px)' }}></span>
                {t.downloadCTA.appStore}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: 'clamp(14px, 2vw, 18px) clamp(28px, 5vw, 45px)',
                  borderRadius: '30px',
                  fontSize: 'clamp(15px, 2.5vw, 18px)',
                  fontWeight: '600',
                  border: '2px solid white',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: 'clamp(20px, 3vw, 24px)' }}></span>
                {t.downloadCTA.googlePlay}
              </motion.button>
            </motion.div>

            {/* 暫時註解：App 尚未上線，之後會啟用這三個統計數據 */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                marginTop: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                flexWrap: 'wrap',
                opacity: 0.9,
              }}
            >
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>{t.downloadCTA.stats.users.number}</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>{t.downloadCTA.stats.users.label}</div>
              </div>
              <div style={{ opacity: 0.5 }}>|</div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>{t.downloadCTA.stats.rating.number}</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>{t.downloadCTA.stats.rating.label}</div>
              </div>
              <div style={{ opacity: 0.5 }}>|</div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>{t.downloadCTA.stats.matches.number}</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>{t.downloadCTA.stats.matches.label}</div>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadCTA
