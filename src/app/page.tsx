'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, Mail, FileText, MessageSquare, Zap, 
  Check, Bot, Sparkles, ArrowRight, Play, 
  Calendar, DollarSign
} from 'lucide-react'

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Bot className="w-8 h-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">SherrodBots</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              <a href="#case-studies" className="text-gray-400 hover:text-white transition">Case Studies</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            </div>
            <a href="#pricing" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-sm text-gray-400">AI agents that actually work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Stop Hiring.<br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Start Deploying.
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Custom AI agents that answer calls, draft emails, manage tasks, 
              and scale your business—built in days, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-indigo-500/25">
                Book $300 Intake Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <button onClick={() => setChatOpen(true)} className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <Play className="w-5 h-5" />
                Talk to Sevyn
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '5+', label: 'AI Employees Deployed' },
                { value: '4,000+', label: 'Documents Processed' },
                { value: '10', label: 'Languages Supported' },
                { value: '24/7', label: 'Availability' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What I Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Production AI systems that run 24/7</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'AI Voice Agents', desc: 'Answer calls in your brand voice, qualify leads, route calls.', example: 'Sevyn handles 100% of calls for 6 brands' },
              { icon: Mail, title: 'Email Assistants', desc: 'Draft responses matching your exact tone, process inbox.', example: '5 employee clones draft emails in their voice' },
              { icon: FileText, title: 'Document Intelligence', desc: 'Scan thousands of files, extract data, build knowledge bases.', example: '4,061 USCIS notices processed automatically' },
              { icon: MessageSquare, title: 'Chat & SMS Bots', desc: '24/7 customer support, lead qualification, booking.', example: 'SMS agent handles follow-ups automatically' },
              { icon: Zap, title: 'Workflow Automation', desc: 'Connect tools, set up monitoring, custom integrations.', example: '30-minute heartbeat checks across systems' },
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.desc}</p>
                <div className="flex items-start gap-2 text-sm text-indigo-400">
                  <Check className="w-4 h-4 mt-0.5" />
                  <span>{service.example}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Real Results</h2>
            <p className="text-gray-400">These systems run my own business every day</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Sevyn Stark', subtitle: 'AI Receptionist', problem: '6 brands, impossible to answer every call', solution: 'AI voice agent with brand detection', results: ['Handles 100% of inbound calls', 'Speaks 10 languages', 'Books consultations auto'], roi: '$40k/year saved' },
              { title: 'Email Clones', subtitle: '5 Team Members', problem: 'Team drowning in emails', solution: 'RAG agents trained on each style', results: ['5 employees cloned', '80% drafts need no editing', 'Authentic voice kept'], roi: '10+ hrs/week saved each' },
              { title: 'Doc Scanner', subtitle: 'USCIS Processor', problem: '4,000+ notices to catalog', solution: 'AI scanner with extraction', results: ['4,061 files processed', '3,180 notices extracted', 'All data cataloged'], roi: '100+ hours eliminated' },
            ].map((study, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                <p className="text-indigo-400 mb-6">{study.subtitle}</p>
                <div className="space-y-4 mb-6">
                  <div><div className="text-xs text-gray-500 uppercase">Problem</div><p className="text-gray-400">{study.problem}</p></div>
                  <div><div className="text-xs text-gray-500 uppercase">Solution</div><p className="text-gray-400">{study.solution}</p></div>
                </div>
                <div className="space-y-2 mb-6">
                  {study.results.map((r, j) => <div key={j} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /><span className="text-sm text-white">{r}</span></div>)}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-green-500">{study.roi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Simple Pricing</h2>
            <p className="text-gray-400">Invest in systems that pay for themselves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Discovery', price: 'FREE', duration: '15 min', desc: 'See if we fit', features: ['Assess needs', 'Map tools', 'Quick wins'], cta: 'Book Free', popular: false },
              { name: 'Intake', price: '$300', duration: '1 hour', desc: 'Deep dive', features: ['Full analysis', 'AI mapping', 'Custom plan', 'Recording'], cta: 'Book Intake', popular: true },
              { name: 'Setup', price: '$600', duration: '2 hours', desc: 'Deploy first agent', features: ['Design + build', 'Working prototype', 'Integration', 'Training'], cta: 'Get Started', popular: false },
              { name: 'Retainer', price: '$2,400', duration: '/month', desc: 'Ongoing partnership', features: ['8 hours included', 'Priority support', 'Optimization', 'New builds'], cta: 'Apply', popular: false },
            ].map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative bg-white/5 border rounded-2xl p-6 ${plan.popular ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-white/10'}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 px-3 py-1 rounded-full text-xs font-medium text-white">Popular</div>}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-2"><span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-500 ml-2">{plan.duration}</span></div>
                <p className="text-gray-400 mt-2 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-6">{plan.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-sm text-white"><Check className="w-4 h-4 text-indigo-500" />{f}</li>)}</ul>
                <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-3 rounded-lg font-medium transition ${plan.popular ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>{plan.cta}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6 text-white">Not Just a Consultant—<br /><span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">A Practitioner</span></h2>
              <div className="space-y-4 text-gray-400">
                <p>Sherrod Seward is a world-renowned sports immigration attorney who has secured visas for <strong className="text-white">Tyson Fury</strong> and <strong className="text-white">Canelo Alvarez</strong>.</p>
                <p>What sets him apart? <strong className="text-white">He runs his entire practice on AI agents</strong>. From Sevyn, his AI receptionist handling 6 brands in 10 languages, to employee email clones that draft messages in each team member's voice.</p>
                <p>Now he's helping other businesses deploy the same systems. These aren't demos—they're battle-tested tools running a real business every day.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2"><div className="text-xs text-gray-500">DC Bar</div><div className="font-medium text-white">Attorney</div></div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2"><div className="text-xs text-gray-500">Published</div><div className="font-medium text-white">Author</div></div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2"><div className="text-xs text-gray-500">Tools</div><div className="font-medium text-white">70+ Integrated</div></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center">
                  <div className="text-center"><Bot className="w-24 h-24 text-indigo-500 mx-auto mb-4" /><p className="text-gray-500">Headshot</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Deploy Your AI Team?</h2>
          <p className="text-xl text-gray-400 mb-8">Book a $300 intake session and walk away with a complete AI roadmap</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-indigo-500/25">
              <Calendar className="w-5 h-5" />
              Book Intake Session
            </a>
            <a href="tel:+19803032854" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              <Phone className="w-5 h-5" />
              Call Sevyn: (980) 303-2854
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2"><Bot className="w-6 h-6 text-indigo-500" /><span className="font-bold text-white">SherrodBots</span></div>
          <p className="text-gray-500 text-sm">© 2026 Innovative Automations. All rights reserved.</p>
          <a href="mailto:ai@innovativeautomations.dev" className="text-gray-500 hover:text-white transition">ai@innovativeautomations.dev</a>
        </div>
      </footer>

      {/* Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-[#111] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div>
              <div><div className="font-medium text-white">Sevyn</div><div className="text-xs text-green-500">Online</div></div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-white">✕</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-white/5 rounded-lg p-3"><p className="text-sm text-white">Hey! I'm Sevyn, Sherrod's AI assistant. I can tell you about AI consulting services, pricing, or book a call. What would you like to know?</p></div>
          </div>
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input type="text" placeholder="Type a message..." className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition">Send</button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)} className="fixed bottom-4 right-4 w-14 h-14 bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/25 flex items-center justify-center z-50 transition">
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  )
}
