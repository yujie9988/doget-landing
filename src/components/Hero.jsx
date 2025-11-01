import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '64px',
              marginBottom: '24px',
              fontWeight: '800',
              lineHeight: '1.2',
            }}
          >
            發現身邊的<br />美好連結
          </motion.h1>

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
            基於地點的智能配對，在健身房、咖啡廳遇見志同道合的朋友
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
