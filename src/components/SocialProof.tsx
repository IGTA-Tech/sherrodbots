'use client'

import { motion } from 'framer-motion'
import { Users, FileText, Clock, Bot } from 'lucide-react'

const stats = [
  {
    icon: <Bot className="w-8 h-8" />,
    value: '5',
    label: 'AI Employees Deployed',
    suffix: '',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    value: '4,061',
    label: 'Documents Processed',
    suffix: '+',
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '6',
    label: 'Brands Managed',
    suffix: '',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: '24/7',
    label: 'Availability',
    suffix: '',
  },
]

export function SocialProof() {
  return (
    <section className="relative py-16 border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg">Trusted by businesses who want to scale without limits</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
