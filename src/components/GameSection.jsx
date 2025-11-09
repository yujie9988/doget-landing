import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'

const GameSection = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* 背景裝飾 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          filter: 'blur(60px)',
        }}
      />

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
            fontSize: '48px',
            marginBottom: '20px',
          }}>
            遊戲化社交體驗
          </h2>

          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            完整的成就、等級、稱號系統，讓社交變得更有趣
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
            {
              icon: '⭐',
              title: '等級系統',
              desc: '累積經驗值提升等級',
              items: ['經驗值累積', '等級提升獎勵', '會員 VIP 系統', '經驗倍數加成']
            },
            {
              icon: '🏆',
              title: '成就徽章',
              desc: '解鎖各種成就稱號',
              items: ['成就徽章解鎖', '自動經驗獎勵', '成就進度追踪', '稱號收集系統']
            },
            {
              icon: '🎁',
              title: '禮物系統',
              desc: '收集和使用各種禮物',
              items: ['禮物盒管理', '兌換碼系統', '每日登錄獎勵', '禮物歷史記錄']
            },
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
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <h3 style={{
            fontSize: '32px',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            更多特色功能
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
          }}>
            {[
              { icon: '📍', title: '智能位置', desc: '後台位置追踪與天氣' },
              { icon: '🛡️', title: '安全保護', desc: '多重驗證與舉報系統' },
              { icon: '👤', title: '暫時好友', desc: '創新的臨時聊天功能' },
              { icon: '🔔', title: 'FCM 推送', desc: '離線消息即時通知' },
            ].map((item, index) => (
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
