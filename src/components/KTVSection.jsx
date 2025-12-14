import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'
import ParticleBackground from './ParticleBackground'

const KTVSection = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="section" style={{
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
                backgroundColor: '#dbeafe',
                color: '#3b82f6',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              {t.ktvSection.badge}
            </motion.div>

            <h2 style={{
              fontSize: '48px',
              marginBottom: '24px',
              color: '#ffffff',
            }}>
              {t.ktvSection.title}
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#e5e7eb',
              marginBottom: '30px',
              lineHeight: '1.8',
            }}>
              {t.ktvSection.description}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {[
                t.ktvSection.features.grouping,
                t.ktvSection.features.realtime,
                t.ktvSection.features.cooldown,
                t.ktvSection.features.verification,
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

          {/* 右側：群聊界面模擬 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
            }}
          >
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '30px',
              padding: '30px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              maxWidth: '450px',
              margin: '0 auto',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              {/* 群聊標題 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '25px',
                paddingBottom: '20px',
                borderBottom: '1px solid #e5e7eb',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '24px',
                }}>
                  🏋️
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff' }}>{t.ktvSection.chatRoom.title}</div>
                  <div style={{ fontSize: '14px', color: '#d1d5db' }}>128 {t.ktvSection.chatRoom.online}</div>
                </div>
              </div>

              {/* 群聊消息 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxHeight: '400px',
              }}>
                {[
                  { user: t.ktvSection.chatRoom.users.fitness, avatar: '💪', msg: t.ktvSection.chatRoom.messages.msg1, time: '14:30' },
                  { user: t.ktvSection.chatRoom.users.runner, avatar: '🏃', msg: t.ktvSection.chatRoom.messages.msg2, time: '14:32' },
                  { user: t.ktvSection.chatRoom.users.yoga, avatar: '🧘', msg: t.ktvSection.chatRoom.messages.msg3, time: '14:35' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                    style={{
                      display: 'flex',
                      gap: '12px',
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}>
                      {item.avatar}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '5px',
                      }}>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>{item.user}</span>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>{item.time}</span>
                      </div>
                      <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        padding: '10px 15px',
                        borderRadius: '15px',
                        fontSize: '15px',
                        color: '#e5e7eb',
                      }}>
                        {item.msg}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 在線用戶頭像 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{
                  marginTop: '25px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ fontSize: '14px', color: '#d1d5db' }}>{t.ktvSection.chatRoom.onlineLabel}</div>
                <div style={{ display: 'flex', marginLeft: '-5px' }}>
                  {['💪', '🏃', '🧘', '🤸', '🚴', '⛹️'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: '2px solid white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '16px',
                        marginLeft: '-8px',
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
                <div style={{ fontSize: '14px', color: '#d1d5db', marginLeft: '5px' }}>+122</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      </ParticleBackground>
    </section>
  )
}

export default KTVSection
