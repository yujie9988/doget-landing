import React from 'react'
import { motion } from 'framer-motion'

const ThirdSection = () => {
  return (
    <section className="section" style={{
      backgroundColor: '#f9fafb',
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
                backgroundColor: '#fce7f3',
                color: '#ec4899',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              使用教學
            </motion.div>

            <h2 style={{
              fontSize: '48px',
              marginBottom: '24px',
              color: '#1f2937',
            }}>
              簡單易用
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '30px',
              lineHeight: '1.8',
            }}>
              快速上手 DoGet，開始您的社交旅程。無論是新手還是資深用戶，都能找到適合的功能。
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {[
                { icon: '1️⃣', title: '註冊帳號', desc: '快速完成註冊，建立個人檔案' },
                { icon: '2️⃣', title: '設定興趣', desc: '選擇您喜歡的場所和活動' },
                { icon: '3️⃣', title: '開始配對', desc: '在附近場所遇見新朋友' },
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

export default ThirdSection
