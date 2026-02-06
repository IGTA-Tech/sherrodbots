'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Award, 
  Globe, 
  Bot, 
  Briefcase,
  MapPin,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const highlights = [
  {
    icon: <Award className="w-5 h-5" />,
    title: 'World-Renowned Attorney',
    description: 'P-1, O-1, and EB-1A visa specialist',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Global Clientele',
    description: 'Athletes, coaches, and entertainers worldwide',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'AI Pioneer',
    description: 'Practice runs on custom AI systems',
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: 'Multi-Brand Operator',
    description: '6 businesses powered by AI',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden glow">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/sherrod-headshot.jpg"
                  alt="Sherrod Seward"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-8 p-4 rounded-xl bg-background/90 backdrop-blur border border-white/10 glow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Sevyn Stark</p>
                  <p className="text-sm text-gray-400">AI Receptionist</p>
                </div>
              </div>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-8 -left-4 md:left-8 px-4 py-2 rounded-full bg-background/90 backdrop-blur border border-white/10"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-blue" />
                <span className="text-sm">Charlotte, NC</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-sm text-gray-300">Meet the Founder</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Sherrod Seward</span>
            </h2>

            <div className="space-y-4 text-gray-300 mb-8">
              <p className="text-lg">
                I'm a world-renowned sports immigration attorney specializing in P-1, O-1, and EB-1A visas 
                for the world's top athletes, coaches, and entertainers. My practice is headquartered in 
                Charlotte, North Carolina.
              </p>
              <p className="text-lg">
                Now I'm applying the same systems-thinking that built a successful law practice to help 
                businesses deploy their own AI agents.
              </p>
              <p className="text-lg">
                My practice runs entirely on custom AI — from <span className="text-white font-semibold">Sevyn</span>, 
                my AI receptionist handling 6 brands in 10 languages, to employee email clones that draft 
                messages matching each team member's exact voice.
              </p>
              <p className="text-lg text-white font-medium">
                I didn't just read about AI. I built it. I run on it. Now I'll build it for you.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
                >
                  <div className="text-accent-blue mb-2">{item.icon}</div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Let's Build Your AI
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
