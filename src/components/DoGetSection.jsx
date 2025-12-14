import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'
import ParticleBackground from './ParticleBackground'

const DoGetSection = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section id="doget" className="section" style={{
      backgroundColor: '#1f2937',
      overflow: 'hidden',
    }}>
      <ParticleBackground>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* 左側：文字內容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-block',
                backgroundColor: '#ede9fe',
                color: '#6366f1',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              {t.dogetSection.badge}
            </motion.div>

            <h2 style={{
              fontSize: '48px',
              marginBottom: '24px',
              color: '#ffffff',
            }}>
              {t.dogetSection.title}
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#e5e7eb',
              marginBottom: '30px',
              lineHeight: '1.8',
            }}>
              {t.dogetSection.description}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {[
                t.dogetSection.features.familiar,
                t.dogetSection.features.gradual,
                t.dogetSection.features.connection,
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                  }}
                >
                  <div style={{
                    fontSize: '24px',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '18px',
                      marginBottom: '5px',
                      color: '#ffffff',
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: '16px',
                      color: '#d1d5db',
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右側：動畫展示 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              height: '600px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* 卡片堆疊效果 */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ rotate: 0, scale: 1 - index * 0.05, y: index * 20 }}
                animate={{
                  rotate: index === 0 ? [0, -5, 5, 0] : 0,
                }}
                transition={{
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  position: 'absolute',
                  width: '300px',
                  height: '450px',
                  borderRadius: '30px',
                  background: index === 0
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : index === 1
                    ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  zIndex: 3 - index,
                }}
              >
                <div style={{
                  fontSize: '80px',
                  marginBottom: '20px',
                }}>
                  {index === 0 ? '👤' : index === 1 ? '😊' : '🎯'}
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '10px',
                }}>
                  {index === 0 ? t.dogetSection.cards.fitness : index === 1 ? t.dogetSection.cards.coffee : t.dogetSection.cards.library}
                </div>
                <div style={{
                  fontSize: '16px',
                  opacity: 0.9,
                }}>
                  {index === 0 ? '500m' : index === 1 ? '1.2km' : '800m'}
                </div>
              </motion.div>
            ))}

            {/* 左右滑動提示 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                bottom: '20px',
                fontSize: '32px',
                zIndex: 4,
              }}
            >
              ← 滑動 →
            </motion.div>
          </motion.div>
        </div>
      </div>
      </ParticleBackground>
    </section>
  )
}

export default DoGetSection
