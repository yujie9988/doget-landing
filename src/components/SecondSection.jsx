import React from 'react'
import { motion } from 'framer-motion'

const SecondSection = () => {
  return (
    <section className="section" style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* 左側：YouTube 影片位置 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
            }}
          >
            {/* YouTube 影片容器 - 16:9 比例 */}
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 比例
              height: 0,
              overflow: 'hidden',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              backgroundColor: '#f3f4f6',
            }}>
              {/* 請在這裡放入您的 YouTube iframe */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                fontSize: '18px',
              }}>
                YouTube 影片位置
              </div>
              {/*
              範例 YouTube iframe:
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '20px',
                }}
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </motion.div>

          {/* 右側：文字內容 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
                color: '#7c3aed',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              功能介紹
            </motion.div>

            <h2 style={{
              fontSize: '48px',
              marginBottom: '24px',
              color: '#1f2937',
            }}>
              探索更多功能
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '30px',
              lineHeight: '1.8',
            }}>
              透過影片了解 DoGet 如何幫助您在各種場合結識新朋友，打造專屬於您的社交圈。
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {[
                { icon: '🎯', title: '精準配對', desc: '基於地點和興趣的智能推薦' },
                { icon: '🔒', title: '隱私保護', desc: '完整的隱私控制與安全機制' },
                { icon: '⚡', title: '即時互動', desc: '流暢的社交體驗' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
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
        </div>
      </div>
    </section>
  )
}

export default SecondSection
