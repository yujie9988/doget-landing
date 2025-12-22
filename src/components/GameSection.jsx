import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'
import ParticleBackground from './ParticleBackground'

const GameSection = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="section" style={{
      backgroundColor: '#1f2937',
      color: 'white',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <ParticleBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '64px',
              marginBottom: '20px',
            }}
          >
            🎮
          </motion.div>

          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            marginBottom: '20px',
          }}>
            {t.gameSection.title}
          </h2>

          <p style={{
            fontSize: 'clamp(16px, 3vw, 20px)',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            {t.gameSection.description}
          </p>
        </motion.div>

        {/* 功能卡片 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '60px',
        }}>
          {[
            t.gameSection.cards.level,
            t.gameSection.cards.achievement,
            t.gameSection.cards.gift,
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
              }}>
                {card.icon}
              </div>
              <h3 style={{
                fontSize: '24px',
                marginBottom: '12px',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '16px',
                opacity: 0.9,
                marginBottom: '20px',
              }}>
                {card.desc}
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {card.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    style={{
                      fontSize: '14px',
                      opacity: 0.85,
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                    }}>✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 額外功能 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <h3 style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            {t.gameSection.moreFeatures.title}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
          }}>
            {t.gameSection.moreFeatures.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: '40px',
                  marginBottom: '15px',
                }}>
                  {item.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  marginBottom: '8px',
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  opacity: 0.85,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GameSection
