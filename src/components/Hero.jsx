import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const places = ['健身房', '咖啡廳', 'KTV', '圖書館', '餐廳', '電影院', '公園', '...']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length)
    }, 2000) // 每2秒切換一次

    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 背景動畫元素 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            textAlign: 'center',
            color: 'white',
          }}
        >
          {/* Tinder 風格的主標題 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(20px, 3vw, 50px)',
              marginBottom: '60px',
              flexWrap: 'nowrap',
              maxWidth: '100%',
            }}
          >
            {/* "Do" 大字 */}
            <div style={{
              fontSize: 'clamp(60px, 12vw, 180px)',
              fontWeight: '900',
              lineHeight: '1',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              flexShrink: 0,
            }}>
              Do
            </div>

            {/* 中間輪播區域 */}
            <div style={{
              position: 'relative',
              width: 'clamp(280px, 40vw, 500px)',
              height: 'clamp(60px, 12vw, 180px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    fontSize: 'clamp(48px, 10vw, 140px)',
                    fontWeight: '800',
                    background: 'linear-gradient(to right, #ffd89b, #19547b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {places[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* "Get" 大字 */}
            <div style={{
              fontSize: 'clamp(60px, 12vw, 180px)',
              fontWeight: '900',
              lineHeight: '1',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              flexShrink: 0,
            }}>
              Get
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: '24px',
              marginBottom: '40px',
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}
          >
            基於地點的智能配對，在各種場合遇見志同道合的朋友
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
                padding: '16px 40px',
                borderRadius: '30px',
                fontSize: '18px',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            >
              App Store 下載
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '30px',
                fontSize: '18px',
                fontWeight: '600',
                border: '2px solid white',
                backdropFilter: 'blur(10px)',
              }}
            >
              Google Play 下載
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              marginTop: '60px',
              fontSize: '14px',
              opacity: 0.8,
            }}
          >
            ✨ 已有超過 10,000+ 用戶正在使用
          </motion.div>
        </motion.div>
      </div>

      {/* 滾動提示 */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '32px',
          opacity: 0.7,
        }}
      >
        ↓
      </motion.div>
    </section>
  )
}

export default Hero
