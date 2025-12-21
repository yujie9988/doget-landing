import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'

const Hero = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  // 將地點分組，每組兩個
  const placeGroups = [
    [t.hero.places.gym, t.hero.places.cafe],
    [t.hero.places.ktv, t.hero.places.library],
    [t.hero.places.more]
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
      flexDirection: 'column',
      justifyContent: 'space-between',
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

      {/* 上方佔位區 */}
      <div style={{ flex: 1 }} />

      {/* 中間標題區 - 垂直居中 */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
            flexWrap: 'nowrap',
            maxWidth: '100%',
            color: 'white',
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
      </div>

      {/* 下方佔位區 */}
      <div style={{ flex: 1 }} />

      {/* 底部區域 - 描述文字和下載按鈕 */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        paddingBottom: '60px',
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
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: 'clamp(16px, 3vw, 24px)',
              opacity: 0.95,
              maxWidth: '700px',
              margin: '0 auto 30px',
              padding: '0 20px',
              textAlign: 'center',
            }}
          >
            {t.hero.subtitle}
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
                padding: 'clamp(12px, 2vw, 16px) clamp(24px, 5vw, 40px)',
                borderRadius: '30px',
                fontSize: 'clamp(15px, 2.5vw, 18px)',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            >
              {t.hero.appStore}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: 'clamp(12px, 2vw, 16px) clamp(24px, 5vw, 40px)',
                borderRadius: '30px',
                fontSize: 'clamp(15px, 2.5vw, 18px)',
                fontWeight: '600',
                border: '2px solid white',
                backdropFilter: 'blur(10px)',
              }}
            >
              {t.hero.googlePlay}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
