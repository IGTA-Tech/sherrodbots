import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 mb-8">Last updated: February 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              SherrodBots ("we", "our", or "us") collects information you provide directly:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Name and email address when you book a call or make a purchase</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Chat messages when using our AI assistant</li>
              <li>Business information shared during consulting sessions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
            <p className="text-gray-300 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide our consulting services</li>
              <li>Process payments</li>
              <li>Communicate with you about your projects</li>
              <li>Improve our services and AI systems</li>
              <li>Send relevant updates (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <p className="text-gray-300">
              We implement industry-standard security measures to protect your data. 
              Payment processing is handled by Stripe, which is PCI-DSS compliant. 
              We do not store your full payment card details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Stripe for payment processing</li>
              <li>Cal.com for appointment scheduling</li>
              <li>AI providers for chat functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-300">
              You have the right to access, correct, or delete your personal information. 
              Contact us at sherrod@sherrodbots.com to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-300">
              For privacy-related questions, contact us at:<br />
              Email: sherrod@sherrodbots.com<br />
              Phone: (980) 303-2854<br />
              Address: Charlotte, NC
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
