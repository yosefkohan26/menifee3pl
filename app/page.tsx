import Hero from './components/home/Hero'
import Services from './components/home/Services'
import Testimonials from './components/home/Testimonials'
import CaseStudies from './components/home/CaseStudies'
import Integrations from './components/home/Integrations'
import FAQ from './components/home/FAQ'
import PricingCalculator from './components/calculators/PricingCalculator'
import CallToAction from './components/home/CallToAction'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Calculate Your Storage Costs</h2>
          <div className="max-w-md mx-auto">
            <PricingCalculator />
          </div>
        </div>
      </div>
      <Testimonials />
      <CaseStudies />
      <Integrations />
      <FAQ />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Stay Informed with Our Logistics Insights</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our blog for the latest trends, tips, and strategies in the world of logistics and supply chain management.
          </p>
          <Link href="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Visit Our Blog
          </Link>
        </div>
      </div>
      <CallToAction />
    </div>
  )
}