import React from 'react'
import { motion } from 'framer-motion'

const DoGetSection = () => {
  return (
    <section id="doget" className="section" style={{
      backgroundColor: 'white',
      overflow: 'hidden',
    }}>
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
              核心功能
            </motion.div>

            <h2 style={{
              fontSize: '48px',
              marginBottom: '24px',
              color: '#1f2937',
            }}>
              DoGet 智能配對
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '30px',
              lineHeight: '1.8',
            }}>
              就像上學時漸漸認識隔壁同學一樣。DoGet 基於你常去的地點（健身房、咖啡廳、圖書館），
              讓你自然地發現周遭的人。不是快速配對陌生人，而是在熟悉的場所培養真實的連結。
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {[
                { icon: '📍', title: '在熟悉的場所相遇', desc: '健身房、咖啡廳、圖書館，自然認識身邊的人' },
                { icon: '🎓', title: '像同學一樣漸漸熟悉', desc: '不急於一時，培養真實的了解和信任' },
                { icon: '💝', title: '日久生情的連結', desc: '相同地點重複出現，建立自然的熟悉感' },
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
                      color: '#1f2937',
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: '16px',
                      color: '#6b7280',
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
                  {index === 0 ? '健身愛好者' : index === 1 ? '咖啡控' : '圖書館常客'}
                </div>
                <div style={{
                  fontSize: '16px',
                  opacity: 0.9,
                }}>
                  距離 {index === 0 ? '500m' : index === 1 ? '1.2km' : '800m'}
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
    </section>
  )
}

export default DoGetSection
