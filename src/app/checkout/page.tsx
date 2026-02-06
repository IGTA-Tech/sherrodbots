'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { 
  Check, 
  ArrowLeft, 
  CreditCard, 
  Shield, 
  Clock,
  Zap,
  Bot
} from 'lucide-react'
import Link from 'next/link'

const PRODUCTS = {
  intake: {
    name: 'Intake Session',
    price: 300,
    priceId: 'price_intake_placeholder',
    description: '1-hour deep dive into your business',
    features: [
      'Full business process audit',
      'AI opportunity identification',
      'Custom solution roadmap',
      'Priority response',
      'Recording provided',
    ],
    duration: '1 hour',
  },
  setup: {
    name: 'Setup Package',
    price: 600,
    priceId: 'price_setup_placeholder',
    description: '2-hour hands-on implementation',
    features: [
      'Everything in Intake Session',
      'Live system setup',
      'Integration configuration',
      'Team training included',
      'Documentation provided',
    ],
    duration: '2 hours',
  },
  retainer: {
    name: 'Monthly Retainer',
    price: 2400,
    priceId: 'price_retainer_placeholder',
    description: '8 hours of dedicated consulting monthly',
    features: [
      'Priority support',
      '8 hours of consulting',
      'Ongoing system optimization',
      'Monthly strategy calls',
      'Slack/Discord access',
    ],
    duration: 'Monthly',
  },
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const productKey = searchParams.get('product') as keyof typeof PRODUCTS || 'intake'
  const product = PRODUCTS[productKey] || PRODUCTS.intake

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleCheckout = async () => {
    if (!email) return

    setIsLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: productKey,
          email,
        }),
      })

      const { url, error } = await response.json()

      if (error) {
        alert(error)
        setIsLoading(false)
        return
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again or contact us directly.')
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to SherrodBots
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-gray-400">{product.description}</p>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold gradient-text">${product.price}</span>
              <span className="text-gray-400">/ {product.duration}</span>
            </div>

            <div className="space-y-3 mb-8">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Shield className="w-5 h-5 text-accent-blue" />
                <span>Secure payment via Stripe</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="w-5 h-5 text-accent-blue" />
                <span>Schedule after purchase</span>
              </div>
            </div>
          </motion.div>

          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold mb-6">Complete Your Purchase</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors"
                  required
                />
              </div>

              <button
                onClick={handleCheckout}
                disabled={!email || isLoading}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay ${product.price}
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                By purchasing, you agree to our Terms of Service
              </p>
            </div>

            {/* Other Options */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Other packages:</p>
              <div className="space-y-2">
                {Object.entries(PRODUCTS)
                  .filter(([key]) => key !== productKey)
                  .map(([key, prod]) => (
                    <Link
                      key={key}
                      href={`/checkout?product=${key}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span>{prod.name}</span>
                      <span className="text-accent-blue">${prod.price}</span>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>Powered by Stripe</span>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full animate-spin" /></div>}>
      <CheckoutContent />
    </Suspense>
  )
}
