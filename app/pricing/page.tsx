import PricingCalculator from '../components/calculators/PricingCalculator'

const PricingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Transparent Pricing</h1>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          At Menifee Logistics, we believe in transparent and competitive pricing. Use our calculator below to estimate your costs, or contact us for a custom quote tailored to your specific needs.
        </p>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <PricingCalculator />
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Pick and Pack</h3>
              <p className="text-gray-700 mb-2">Starting at $0.50 per item</p>
              <p className="text-sm text-gray-600">Includes labeling and packaging</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">FBA Prep</h3>
              <p className="text-gray-700 mb-2">Starting at $1.00 per item</p>
              <p className="text-sm text-gray-600">Varies based on product complexity</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Requests</h3>
              <p className="text-gray-700 mb-2">Contact for pricing</p>
              <p className="text-sm text-gray-600">Tailored solutions for your unique needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
