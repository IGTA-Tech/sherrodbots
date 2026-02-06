import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 mb-8">Last updated: February 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Services</h2>
            <p className="text-gray-300">
              SherrodBots provides AI consulting services including but not limited to: 
              AI voice agent development, email automation, document processing, 
              chatbot creation, and workflow automation. Services are provided as described 
              in your service agreement or purchase confirmation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Payments</h2>
            <p className="text-gray-300 mb-4">
              All fees are due at the time of purchase unless otherwise agreed. 
              We accept major credit cards via Stripe.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Discovery Call: Free</li>
              <li>Intake Session: $300 (1 hour)</li>
              <li>Setup Session: $600 (2 hours)</li>
              <li>Hourly Consulting: $300/hour</li>
              <li>Monthly Retainer: $2,400/month</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Refund Policy</h2>
            <p className="text-gray-300">
              If you are not satisfied with a consulting session, please contact us 
              within 7 days. We offer a satisfaction guarantee and will work with you 
              to make it right, which may include a partial or full refund at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Scheduling & Cancellation</h2>
            <p className="text-gray-300">
              Sessions must be scheduled within 90 days of purchase. Cancellations 
              with less than 24 hours notice may result in forfeiture of the session. 
              Rescheduling is available with reasonable notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300">
              Custom AI solutions, code, and systems developed specifically for your 
              business remain your property. Our proprietary frameworks, templates, 
              and methodologies remain our intellectual property. You receive a license 
              to use deliverables for your business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
            <p className="text-gray-300">
              We maintain strict confidentiality regarding your business information, 
              strategies, and data shared during our engagement. We will not share your 
              confidential information with third parties without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300">
              Our liability is limited to the amount paid for services. We are not 
              liable for indirect, incidental, or consequential damages. AI systems 
              are provided as tools and require human oversight for critical decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-gray-300">
              For questions about these terms, contact us at:<br />
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
