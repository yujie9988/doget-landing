import React from 'react'
import { motion } from 'framer-motion'

const ChatSection = () => {
  const messages = [
    { id: 1, text: '嗨！你也常來這間健身房嗎？', isMine: false, time: '10:23' },
    { id: 2, text: '對啊，每週都會來三次', isMine: true, time: '10:24' },
    { id: 3, text: '我們可以一起訓練！', isMine: false, time: '10:25' },
  ]

  return (
    <section id="chat" className="section" style={{
      backgroundColor: '#f9fafb',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* 左側：聊天界面模擬 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
            }}
          >
            <div style={{
              backgroundColor: 'white',
              borderRadius: '30px',
              padding: '30px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              {/* 聊天標題 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '1px solid #e5e7eb',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '24px',
                }}>
                  👤
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>健身夥伴</div>
                  <div style={{ fontSize: '14px', color: '#10b981' }}>● 在線</div>
                </div>
              </div>

              {/* 消息列表 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    style={{
                      display: 'flex',
                      justifyContent: msg.isMine ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div style={{
                      backgroundColor: msg.isMine ? '#6366f1' : '#e5e7eb',
                      color: msg.isMine ? 'white' : '#1f2937',
                      padding: '12px 18px',
                      borderRadius: msg.isMine ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                      maxWidth: '70%',
                      fontSize: '15px',
                    }}>
                      {msg.text}
                      <div style={{
                        fontSize: '11px',
                        opacity: 0.7,
                        marginTop: '5px',
                        textAlign: 'right',
                      }}>
                        {msg.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 輸入框 */}
              <div style={{
                marginTop: '20px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
              }}>
                <div style={{
                  flex: 1,
                  backgroundColor: '#f3f4f6',
                  borderRadius: '25px',
                  padding: '12px 20px',
                  fontSize: '14px',
                  color: '#9ca3af',
                }}>
                  輸入訊息...
                </div>
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  backgroundColor: '#6366f1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '20px',
                }}>
                  📤
                </div>
              </div>
            </div>

            {/* 通知徽章 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              style={{
                position: 'absolute',
                top: '-10px',
                right: '30px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#ef4444',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
              }}
            >
              3
            </motion.div>
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
              即時溝通
            </motion.div>

            <h2 style={{
              fontSize: '48px',
              marginBottom: '24px',
              color: '#1f2937',
            }}>
              實時聊天系統
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '30px',
              lineHeight: '1.8',
            }}>
              WebSocket 驅動的零延遲聊天體驗，支援離線消息同步。不論何時何地，都能保持連結。
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {[
                { icon: '⚡', title: '零延遲傳送', desc: 'WebSocket 實時通訊技術' },
                { icon: '💾', title: '離線消息', desc: '離線時也不會錯過任何消息' },
                { icon: '🔔', title: 'FCM 推送', desc: 'Firebase 推送通知提醒' },
                { icon: '🖼️', title: '圖片支援', desc: '輕鬆分享生活精彩瞬間' },
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

export default ChatSection
