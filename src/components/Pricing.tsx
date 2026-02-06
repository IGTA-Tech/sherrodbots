'use client'

import { motion } from 'framer-motion'
import { 
  Check, 
  Sparkles, 
  Zap, 
  Clock,
  ArrowRight,
  Star,
  Gift
} from 'lucide-react'
import Link from 'next/link'

const pricingTiers = [
  {
    name: 'Discovery Call',
    price: 'FREE',
    priceDetail: '15 minutes',
    description: 'Quick chat to see if we\'re a fit',
    features: [
      'Discuss your business challenges',
      'Explore AI solutions',
      'No commitment required',
      'Get actionable insights',
    ],
    cta: 'Schedule Free Call',
    href: 'https://cal.com/sherrodbots/discovery',
    popular: false,
    icon: <Gift className="w-6 h-6" />,
  },
  {
    name: 'Intake Session',
    price: '$300',
    priceDetail: '1 hour',
    description: 'Deep dive into your workflow',
    features: [
      'Full business process audit',
      'AI opportunity identification',
      'Custom solution roadmap',
      'Priority response',
      'Recording provided',
    ],
    cta: 'Book Intake Session',
    href: 'https://cal.com/sherrodbots/intake',
    popular: true,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: 'Setup Session',
    price: '$600',
    priceDetail: '2 hours',
    description: 'Hands-on implementation help',
    features: [
      'Everything in Intake',
      'Live system setup',
      'Integration configuration',
      'Team training included',
      'Documentation provided',
    ],
    cta: 'Book Setup Session',
    href: 'https://cal.com/sherrodbots/setup',
    popular: false,
    icon: <Sparkles className="w-6 h-6" />,
  },
]

const additionalOptions = [
  {
    name: 'Hourly Consulting',
    price: '$300',
    unit: '/hour',
    description: 'For ongoing projects and custom builds',
  },
  {
    name: 'Monthly Retainer',
    price: '$2,400',
    unit: '/month',
    description: '8 hours of dedicated AI consulting monthly',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Invest in{' '}
            <span className="gradient-text">Your AI Future</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Just results.
          </p>
        </motion.div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.popular 
                  ? 'bg-gradient-to-b from-accent-blue/20 to-accent-purple/20 border-2 border-accent-blue/50' 
                  : 'bg-white/[0.03] border border-white/10'
              } card-hover`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                tier.popular 
                  ? 'bg-gradient-to-br from-accent-blue to-accent-purple' 
                  : 'bg-white/10'
              }`}>
                {tier.icon}
              </div>

              {/* Name & Price */}
              <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                <span className="text-gray-400">{tier.priceDetail}</span>
              </div>
              <p className="text-gray-400 mb-6">{tier.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {additionalOptions.map((option) => (
            <div
              key={option.name}
              className="flex items-center justify-between p-6 rounded-xl bg-white/[0.03] border border-white/10"
            >
              <div>
                <h4 className="font-semibold text-lg">{option.name}</h4>
                <p className="text-gray-400 text-sm">{option.description}</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold gradient-text">{option.price}</span>
                <span className="text-gray-400">{option.unit}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            All sessions include a recording for your reference. Enterprise packages available for larger teams.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
