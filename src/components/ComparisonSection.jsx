import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../locales'

const ComparisonSection = () => {
  const { language } = useLanguage()
  const t = getTranslation(language)

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
            {t.comparisonSection.icon}
          </motion.div>

          <h2 style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#1f2937',
          }}>
            {t.comparisonSection.title}
          </h2>

          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            {t.comparisonSection.description}<br />
            {t.comparisonSection.descriptionHighlight1}<strong style={{ color: '#6366f1' }}>{t.comparisonSection.descriptionBold1}</strong>
            {t.comparisonSection.descriptionHighlight2}<strong style={{ color: '#6366f1' }}>{t.comparisonSection.descriptionBold2}</strong>
            {t.comparisonSection.descriptionHighlight3}
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
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#6b7280' }}>{t.comparisonSection.tableHeader}</div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#6366f1', textAlign: 'center' }}>{t.comparisonSection.doget}</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#9ca3af', textAlign: 'center' }}>{t.comparisonSection.others}</div>

            {/* 分隔線 */}
            <div style={{ gridColumn: '1 / -1', height: '1px', backgroundColor: '#e5e7eb', margin: '10px 0' }} />

            {/* 比較項目 */}
            {[
              { feature: t.comparisonSection.features.location, doget: true, others: false },
              { feature: t.comparisonSection.features.filterFake, doget: true, others: false },
              { feature: t.comparisonSection.features.realUsers, doget: true, others: false },
              { feature: t.comparisonSection.features.interests, doget: true, others: false },
              { feature: t.comparisonSection.features.report, doget: true, others: true },
              { feature: t.comparisonSection.features.chat, doget: true, others: true },
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
            t.comparisonSection.highlights.classmate,
            t.comparisonSection.highlights.connection,
            t.comparisonSection.highlights.noFake,
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
            {t.comparisonSection.stats.title}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}>
            {[
              t.comparisonSection.stats.familiar,
              t.comparisonSection.stats.natural,
              t.comparisonSection.stats.real,
              t.comparisonSection.stats.zero,
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
