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
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          DoGet
        </div>

        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
        }}>
          <a href="#features" style={{ color: '#1f2937', fontWeight: '500' }}>功能</a>
          <a href="#doget" style={{ color: '#1f2937', fontWeight: '500' }}>配對</a>
          <a href="#chat" style={{ color: '#1f2937', fontWeight: '500' }}>聊天</a>
          <a href="#download" style={{
            backgroundColor: '#6366f1',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '25px',
            fontWeight: '600',
            transition: 'all 0.3s',
          }}>下載 App</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
