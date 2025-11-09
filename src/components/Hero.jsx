import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  // 將地點分組，每組兩個
  const placeGroups = [
    ['健身房', '咖啡廳'],
    ['KTV', '圖書館'],
    ['...']
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % placeGroups.length)
    }, 2000) // 每2秒切換一次

    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(/PageImage/mainpage.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 半透明遮罩層，讓文字更清晰 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 0,
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            textAlign: 'center',
            color: 'white',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
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
              gap: 'clamp(3px, 0.5vw, 8px)',
              marginBottom: '10px',
              flexWrap: 'nowrap',
              maxWidth: '100%',
            }}
          >
            {/* "Do" 大字 */}
            <div style={{
              fontSize: 'clamp(40px, 8vw, 90px)',
              fontWeight: '900',
              lineHeight: '1',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              flexShrink: 0,
              textAlign: 'center',
            }}>
              Do
            </div>

            {/* 中間輪播區域 */}
            <div style={{
              position: 'relative',
              width: 'clamp(140px, 22vw, 270px)',
              height: 'clamp(80px, 16vw, 220px)',
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(22px, 4vw, 52px)',
                    fontWeight: '700',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    lineHeight: '1.2',
                    textAlign: 'center',
                  }}>
                    {placeGroups[currentIndex][0]}
                  </div>
                  {placeGroups[currentIndex][1] && (
                    <div style={{
                      fontSize: 'clamp(22px, 4vw, 52px)',
                      fontWeight: '700',
                      color: 'white',
                      whiteSpace: 'nowrap',
                      lineHeight: '1.2',
                      textAlign: 'center',
                    }}>
                      {placeGroups[currentIndex][1]}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* "Get" 大字 */}
            <div style={{
              fontSize: 'clamp(40px, 8vw, 90px)',
              fontWeight: '900',
              lineHeight: '1',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              flexShrink: 0,
              textAlign: 'center',
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
              opacity: 0.95,
              maxWidth: '700px',
              margin: '0 auto 30px',
              padding: '0 20px',
              paddingBottom:'50px',
              textAlign: 'center',
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
              alignItems: 'center',
              flexWrap: 'wrap',
              padding: '0 20px',
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
