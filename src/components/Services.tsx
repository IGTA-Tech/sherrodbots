'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  FileSearch, 
  MessageSquare, 
  Workflow,
  ArrowRight,
  Mic,
  Brain,
  Zap,
  Globe
} from 'lucide-react'

const services = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'AI Voice Agents',
    description: 'Custom voice agents that handle inbound calls, qualify leads, and book appointments. Speaks 10+ languages.',
    example: 'Sevyn Stark handles 6 brands simultaneously, routing calls with perfect accuracy.',
    features: ['Multi-language support', 'Brand voice matching', 'CRM integration', 'Call transcription'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email Assistants',
    description: 'AI that drafts emails matching your exact voice and tone. Train it on your writing style.',
    example: 'Employee email clones that draft responses indistinguishable from the original author.',
    features: ['Voice cloning', 'Context awareness', 'Draft approval workflow', 'Signature management'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: 'Document Intelligence',
    description: 'Automated document processing, extraction, and organization at massive scale.',
    example: '4,061 USCIS documents scanned and indexed automatically.',
    features: ['OCR extraction', 'Smart categorization', 'Search indexing', 'Compliance tracking'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Chat & SMS Bots',
    description: 'Intelligent conversational agents for websites, SMS, and messaging platforms.',
    example: 'Instant responses to client inquiries with context-aware follow-ups.',
    features: ['24/7 availability', 'Lead qualification', 'Appointment booking', 'FAQ handling'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Workflow Automation',
    description: 'Connect your tools and automate repetitive tasks across your entire business.',
    example: 'Immigration knowledge base with 286 videos indexed and searchable.',
    features: ['API integrations', 'Custom triggers', 'Multi-step workflows', 'Real-time sync'],
    gradient: 'from-indigo-500 to-violet-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Brain className="w-4 h-4 text-accent-purple" />
            <span className="text-sm text-gray-300">What We Build</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            AI Solutions That{' '}
            <span className="gradient-text">Actually Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Not theoretical. Not experimental. These are battle-tested AI systems running 
            real businesses right now.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`gradient-border card-hover p-6 rounded-2xl bg-white/[0.02] ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Example */}
              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-300 italic">"{service.example}"</p>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <Zap className="w-3 h-3 text-accent-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-white/10">
            <Globe className="w-12 h-12 text-accent-blue" />
            <div className="text-left">
              <p className="font-semibold">Need something custom?</p>
              <p className="text-gray-400 text-sm">We build AI solutions tailored to your exact workflow.</p>
            </div>
            <a href="#pricing" className="btn-primary flex items-center gap-2 ml-4">
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
