import React from 'react'
import { motion } from 'framer-motion'

const ComparisonSection = () => {
  return (
    <section className="section" style={{
      backgroundColor: 'white',
      overflow: 'hidden',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}
          >
            🛡️
          </motion.div>

          <h2 style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#1f2937',
          }}>
            為何選擇 DoGet？
          </h2>

          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            還記得上學時，和坐隔壁的同學從陌生到熟悉的過程嗎？<br />
            DoGet 透過<strong style={{ color: '#6366f1' }}>地點配對機制</strong>，
            讓你在熟悉的健身房、咖啡廳，<strong style={{ color: '#6366f1' }}>自然地認識身邊的人</strong>。<br />
            不像其他 App 充斥著假帳號和詐騙訊息，而是真實的、日久生情的連結。
          </p>
        </motion.div>

        {/* 比較表格 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            maxWidth: '1000px',
            margin: '0 auto 60px',
            backgroundColor: '#f9fafb',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '20px',
            alignItems: 'center',
          }}>
            {/* 表頭 */}
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#6b7280' }}>功能特色</div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#6366f1', textAlign: 'center' }}>DoGet</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#9ca3af', textAlign: 'center' }}>其他 App</div>

            {/* 分隔線 */}
            <div style={{ gridColumn: '1 / -1', height: '1px', backgroundColor: '#e5e7eb', margin: '10px 0' }} />

            {/* 比較項目 */}
            {[
              { feature: '基於真實地點配對', doget: true, others: false },
              { feature: '自動過濾假帳號', doget: true, others: false },
              { feature: '確保用戶真實存在', doget: true, others: false },
              { feature: '共同興趣篩選', doget: true, others: false },
              { feature: '舉報和封禁系統', doget: true, others: true },
              { feature: '實時聊天', doget: true, others: true },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  style={{
                    fontSize: '16px',
                    color: '#1f2937',
                    padding: '12px 0',
                  }}
                >
                  {item.feature}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  style={{
                    textAlign: 'center',
                    fontSize: '24px',
                  }}
                >
                  {item.doget ? '✅' : '❌'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  style={{
                    textAlign: 'center',
                    fontSize: '24px',
                    opacity: 0.5,
                  }}
                >
                  {item.others ? '✅' : '❌'}
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 差異化亮點 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '40px',
        }}>
          {[
            {
              icon: '🎓',
              title: '像上學時認識同學一樣',
              desc: '其他 App 像盲目約會，配對陌生人後才開始聊天',
              highlight: 'DoGet 讓你在熟悉的場所（健身房、咖啡廳）自然認識周遭的人，就像在教室裡漸漸熟悉身邊的同學'
            },
            {
              icon: '💝',
              title: '日久生情的真實連結',
              desc: '傳統 App 快速配對，缺乏了解和信任的過程',
              highlight: 'DoGet 透過相同地點的重複出現，建立自然的熟悉感。不急於一時，而是培養真正的連結'
            },
            {
              icon: '🚫',
              title: '天然過濾假帳號',
              desc: '其他平台充斥虛假帳號、詐騙訊息和機器人',
              highlight: '詐騙者無法偽造真實地點，DoGet 的地點機制自然過濾掉所有假帳號和機器人'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '35px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '2px solid #f3f4f6',
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '22px',
                marginBottom: '15px',
                color: '#1f2937',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#9ca3af',
                marginBottom: '15px',
                lineHeight: '1.6',
              }}>
                ❌ {item.desc}
              </p>
              <p style={{
                fontSize: '16px',
                color: '#6366f1',
                fontWeight: '600',
                lineHeight: '1.7',
                backgroundColor: '#ede9fe',
                padding: '15px',
                borderRadius: '12px',
              }}>
                ✅ {item.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 統計數據 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '30px',
            padding: '50px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h3 style={{
            fontSize: '32px',
            marginBottom: '40px',
          }}>
            回歸最自然的認識方式
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}>
            {[
              { number: '熟悉', label: '場所相遇', desc: '像在教室裡認識同學' },
              { number: '自然', label: '培養感情', desc: '日久生情的過程' },
              { number: '真實', label: '用戶存在', desc: '確實在該地點出現' },
              { number: '0', label: '假帳號', desc: '地點機制天然過濾' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  marginBottom: '10px',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '5px',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '14px',
                  opacity: 0.9,
                }}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection
