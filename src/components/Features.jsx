import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    style={{
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    }}
    whileHover={{
      y: -10,
      boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)',
    }}
  >
    <div style={{
      fontSize: '48px',
      marginBottom: '20px',
    }}>
      {icon}
    </div>
    <h3 style={{
      fontSize: '24px',
      marginBottom: '16px',
      color: '#1f2937',
    }}>
      {title}
    </h3>
    <p style={{
      fontSize: '16px',
      color: '#6b7280',
      lineHeight: '1.8',
    }}>
      {description}
    </p>
  </motion.div>
)

const Features = () => {
  const features = [
    {
      icon: '💝',
      title: 'DoGet 智能配對',
      description: '基於地點的滑動配對，在健身房、咖啡廳發現志同道合的朋友'
    },
    {
      icon: '💬',
      title: '實時聊天',
      description: 'WebSocket 驅動的零延遲聊天，支援離線消息同步'
    },
    {
      icon: '🎤',
      title: 'KTV 社群',
      description: '按地點分組的群聊室，與附近的朋友一起討論'
    },
    {
      icon: '🏆',
      title: '成就系統',
      description: '完整的等級、成就、稱號系統，讓社交更有樂趣'
    },
    {
      icon: '📍',
      title: '位置智能',
      description: '智能位置追踪，自動推薦附近的用戶和地點'
    },
    {
      icon: '🛡️',
      title: '安全保護',
      description: '多重驗證、舉報和封禁系統，保護用戶安全'
    },
  ]

  return (
    <section id="features" className="section" style={{
      backgroundColor: '#f9fafb',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          <h2 style={{
            fontSize: '48px',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            強大的功能
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            一站式社交平台，滿足你所有的社交需求
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
