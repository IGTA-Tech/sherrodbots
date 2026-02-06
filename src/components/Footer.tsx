'use client'

import { motion } from 'framer-motion'
import { Bot, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  services: [
    { name: 'AI Voice Agents', href: '#services' },
    { name: 'Email Assistants', href: '#services' },
    { name: 'Document Intelligence', href: '#services' },
    { name: 'Chat & SMS Bots', href: '#services' },
    { name: 'Workflow Automation', href: '#services' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/[0.01]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Sherrod<span className="gradient-text">Bots</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Custom AI agents that answer calls, draft emails, and scale your business.
            </p>
            <div className="space-y-2">
              <a href="tel:+19803032854" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (980) 303-2854
              </a>
              <a href="mailto:sherrod@sherrodbots.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                sherrod@sherrodbots.com
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Charlotte, NC
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-semibold mb-4">Ready to Start?</h4>
            <p className="text-gray-400 mb-4">
              Book a free discovery call and see how AI can transform your business.
            </p>
            <Link
              href="https://cal.com/sherrodbots/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-sm"
            >
              Schedule Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SherrodBots. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Built with AI, powered by{' '}
              <a href="https://innovativeautomations.dev" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                Innovative Automations
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
