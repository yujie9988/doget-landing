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
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            市面上交友 App 不少，但 DoGet 專注於讓你遇見<strong style={{ color: '#6366f1' }}>真實的人</strong>，
            在<strong style={{ color: '#6366f1' }}>真實的地點</strong>建立有意義的連結。
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
              { feature: '真實身份驗證', doget: true, others: false },
              { feature: '基於真實地點配對', doget: true, others: false },
              { feature: '嚴格反詐騙機制', doget: true, others: false },
              { feature: '多重安全檢查', doget: true, others: false },
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
              icon: '🚫',
              title: '告別假帳號和詐騙',
              desc: '其他平台充斥大量虛假帳號、詐騙訊息和騷擾內容',
              highlight: 'DoGet 透過地點驗證和多重檢查，確保你遇見的都是真人'
            },
            {
              icon: '📍',
              title: '基於真實地點',
              desc: '傳統 App 只靠照片和文字，難以確認對方真實性',
              highlight: 'DoGet 讓你在熟悉的健身房、咖啡廳遇見真實存在的人'
            },
            {
              icon: '🛡️',
              title: '主動安全防護',
              desc: '多數平台只能被動接受舉報，無法提前防範',
              highlight: 'DoGet 主動監測異常行為，封禁機制保護用戶安全'
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
            DoGet 用戶體驗更安心
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}>
            {[
              { number: '0', label: '詐騙投訴', desc: '嚴格驗證機制' },
              { number: '99.8%', label: '真實用戶', desc: '地點驗證保證' },
              { number: '<1min', label: '異常帳號處理', desc: '即時安全監測' },
              { number: '4.9★', label: '安全感評分', desc: '用戶真實回饋' },
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
