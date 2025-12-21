import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'
import ParticleBackground from './ParticleBackground'

const Footer = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '60px 0 0',
      position: 'relative',
    }}>
      <ParticleBackground />
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '50px 0 30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}>
          {/* 品牌區 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              DoGet
            </div>
            <p style={{
              fontSize: '16px',
              opacity: 0.8,
              lineHeight: '1.6',
              marginBottom: '20px',
            }}>
              {t.footer.description}
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
            }}>
              {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 產品 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
            }}>
              {t.footer.product.title}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {t.footer.product.items.map((item, index) => (
                <li key={index} style={{
                  marginBottom: '12px',
                }}>
                  <a href="#" style={{
                    color: 'white',
                    opacity: 0.7,
                    fontSize: '15px',
                    transition: 'opacity 0.3s',
                  }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 公司 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
            }}>
              {t.footer.company.title}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {t.footer.company.items.map((item, index) => (
                <li key={index} style={{
                  marginBottom: '12px',
                }}>
                  <a href="#" style={{
                    color: 'white',
                    opacity: 0.7,
                    fontSize: '15px',
                    transition: 'opacity 0.3s',
                  }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 支援 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
            }}>
              {t.footer.support.title}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {t.footer.support.items.map((item, index) => (
                <li key={index} style={{
                  marginBottom: '12px',
                }}>
                  <a href="#" style={{
                    color: 'white',
                    opacity: 0.7,
                    fontSize: '15px',
                    transition: 'opacity 0.3s',
                  }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

          {/* 版權信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              paddingTop: '30px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              fontSize: '14px',
              opacity: 0.6,
            }}
          >
            <p>{t.footer.copyright}</p>
            <p style={{ marginTop: '5px' }}>
              {t.footer.madeWith}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
