import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = getTranslation(language)

  // 檢測當前是否在功能介紹頁面
  const isFeaturesPage = window.location.pathname === '/features'

  useEffect(() => {
    const handleScroll = () => {
      // 功能介紹頁面：只要離開頂部就觸發（scrollY > 10）
      // 首頁：滾動超過 50px 才觸發（用於陰影效果）
      setScrolled(isFeaturesPage ? window.scrollY > 10 : window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFeaturesPage])

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
        // 根據頁面使用不同的背景邏輯
        background: isFeaturesPage
          ? scrolled
            ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%)' // 功能頁滾動時：半透明黑色
            : 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)' // 功能頁頂部：100% 不透明純黑色
          : 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)', // 首頁：固定透明度
        backdropFilter: 'blur(10px)',
        boxShadow: isFeaturesPage
          ? (scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.5)')
          : (scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none'),
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
          <a href="/" style={{
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            opacity: 0.9,
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.9'}
          >{t.navbar.home}</a>

          <a href="/features" style={{
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            opacity: 0.9,
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.9'}
          >{t.navbar.features}</a>

          {/* 語言切換選單 */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: '500',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <span>🌐</span>
              <span>{language === 'zh-TW' ? '繁體中文' : 'English'}</span>
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '45px',
                    right: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    minWidth: '140px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <button
                    onClick={() => {
                      toggleLanguage('zh-TW')
                      setShowLangMenu(false)
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: language === 'zh-TW' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      color: '#ffffff',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: language === 'zh-TW' ? '600' : '400',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (language !== 'zh-TW') {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (language !== 'zh-TW') {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    繁體中文
                  </button>
                  <button
                    onClick={() => {
                      toggleLanguage('en')
                      setShowLangMenu(false)
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: language === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      color: '#ffffff',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: language === 'en' ? '600' : '400',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (language !== 'en') {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (language !== 'en') {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
          >{t.navbar.download}</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
