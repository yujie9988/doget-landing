import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        // Tinder 風格黑色漸層背景
        background: scrolled
          ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%)'
          : 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
        height: '64px',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 32px',
        height: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Logo 區域 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          {/* 如果你有提供 logo 圖片，取消下面這行的註解 */}
          {/* <img src="/logo.png" alt="DoGet Logo" style={{ height: '40px', width: 'auto' }} /> */}

          {/* 文字 Logo（如果沒有圖片 logo 就使用這個） */}
          <div style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#ffffff',
            letterSpacing: '-0.5px',
          }}>
            DoGet
          </div>
        </div>

        {/* 導航連結 */}
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
        }}>
          <a href="#features" style={{
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            opacity: 0.9,
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.9'}
          >功能</a>

          <a href="#doget" style={{
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            opacity: 0.9,
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.9'}
          >配對</a>

          <a href="#chat" style={{
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            opacity: 0.9,
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.9'}
          >聊天</a>

          <a href="#download" style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '12px 28px',
            borderRadius: '30px',
            fontWeight: '600',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'all 0.3s',
            boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)'
            e.target.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = '0 2px 8px rgba(255, 255, 255, 0.2)'
          }}
          >下載 App</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
