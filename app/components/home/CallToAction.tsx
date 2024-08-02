import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Optimize Your Logistics?</h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join the growing number of businesses that trust Menifee 3PL for their fulfillment needs. 
          Experience the difference of our tailored solutions and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </Link>
          <Link href="/pricing" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Calculate Savings
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
