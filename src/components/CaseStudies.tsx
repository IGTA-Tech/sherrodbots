'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  FileText, 
  Video,
  ArrowRight,
  Globe,
  Users,
  CheckCircle,
  Sparkles
} from 'lucide-react'

const caseStudies = [
  {
    icon: <Phone className="w-10 h-10" />,
    title: 'Sevyn Stark',
    subtitle: 'AI Receptionist',
    metric: '6 Brands, 10 Languages',
    description: 'A single AI voice agent that handles calls for multiple law firms and businesses simultaneously. Sevyn routes calls intelligently, books consultations, and qualifies leads — all while speaking the caller\'s native language.',
    results: [
      'Handles calls for 6 different brands',
      'Fluent in 10 languages including Spanish, Portuguese, and Mandarin',
      'Routes to correct team member based on inquiry type',
      'Books consultations directly into calendar',
    ],
    gradient: 'from-blue-500 to-cyan-400',
    bgImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)',
  },
  {
    icon: <Mail className="w-10 h-10" />,
    title: '5 Employee Email Clones',
    subtitle: 'Voice-Matched AI Writers',
    metric: 'Indistinguishable from Human',
    description: 'RAG-powered AI agents trained on each employee\'s writing samples. These clones draft emails that perfectly match individual communication styles, from formal legal correspondence to friendly follow-ups.',
    results: [
      '5 distinct AI personalities deployed',
      'Trained on 1000+ email samples per employee',
      'Handles drafts, replies, and follow-ups',
      'Approval workflow before sending',
    ],
    gradient: 'from-purple-500 to-pink-400',
    bgImage: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: '4,061 USCIS Documents',
    subtitle: 'Automated Processing',
    metric: '100% Accuracy Rate',
    description: 'Immigration document scanning system that extracts data from USCIS forms, organizes case files, and makes everything instantly searchable. What used to take hours now takes seconds.',
    results: [
      '4,061 documents processed automatically',
      'OCR extraction with 99.8% accuracy',
      'Smart categorization by visa type',
      'Full-text search across all documents',
    ],
    gradient: 'from-orange-500 to-red-400',
    bgImage: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(248, 113, 113, 0.1) 100%)',
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: 'Immigration Knowledge Base',
    subtitle: 'Video Intelligence',
    metric: '286 Videos Indexed',
    description: 'A searchable library of immigration law content. AI watches, transcribes, and indexes video content so the team can find exactly what they need in seconds.',
    results: [
      '286 training videos transcribed',
      'AI-generated summaries for each video',
      'Semantic search across all content',
      'Topic clustering and recommendations',
    ],
    gradient: 'from-green-500 to-emerald-400',
    bgImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%)',
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative overflow-hidden bg-white/[0.01]">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span className="text-sm text-gray-300">Real Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built By Us.{' '}
            <span className="gradient-text">Running Right Now.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These aren't mockups or demos. These are live AI systems powering real businesses every single day.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className="rounded-2xl p-8 border border-white/10 card-hover h-full"
                style={{ background: study.bgImage }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${study.gradient}`}>
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{study.title}</h3>
                    <p className="text-gray-400">{study.subtitle}</p>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-semibold gradient-text">{study.metric}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{study.description}</p>

                {/* Results */}
                <ul className="space-y-3">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16 p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-gray-400 text-sm mt-1">AI Agents Live</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">4,000+</div>
              <div className="text-gray-400 text-sm mt-1">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">10</div>
              <div className="text-gray-400 text-sm mt-1">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-gray-400 text-sm mt-1">Always Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
