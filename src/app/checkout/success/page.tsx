'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Mail, ArrowRight, Bot } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
        >
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for your purchase. You'll receive a confirmation email shortly with next steps.
        </p>

        {/* Next Steps Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-8 text-left">
          <h2 className="font-semibold mb-4">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="font-medium">Check your email</p>
                <p className="text-sm text-gray-400">You'll receive a confirmation with details</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-accent-purple" />
              </div>
              <div>
                <p className="font-medium">Schedule your session</p>
                <p className="text-sm text-gray-400">Book a time that works for you</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium">Meet with Sherrod</p>
                <p className="text-sm text-gray-400">Start building your AI solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://cal.com/sherrodbots"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Schedule Your Session
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            Return to Home
          </Link>
        </div>

        {/* Support Note */}
        <p className="text-sm text-gray-500 mt-8">
          Questions? Email us at{' '}
          <a href="mailto:sherrod@sherrodbots.com" className="text-accent-blue hover:underline">
            sherrod@sherrodbots.com
          </a>
        </p>
      </motion.div>
    </main>
  )
}
