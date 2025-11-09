import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'

const DownloadCTA = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section id="download" className="section" style={{
      backgroundColor: '#f9fafb',
      overflow: 'hidden',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '40px',
            padding: '80px 60px',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 背景動畫 */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              filter: 'blur(60px)',
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [180, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-10%',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              filter: 'blur(60px)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '80px',
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
                fontSize: '48px',
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
                fontSize: '20px',
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
                  padding: '18px 45px',
                  borderRadius: '30px',
                  fontSize: '18px',
                  fontWeight: '600',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '24px' }}></span>
                {t.downloadCTA.appStore}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '18px 45px',
                  borderRadius: '30px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: '2px solid white',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '24px' }}></span>
                {t.downloadCTA.googlePlay}
              </motion.button>
            </motion.div>

            <motion.div
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadCTA
