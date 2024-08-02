import Link from 'next/link'
import AnimatedSection from '../components/common/AnimatedSection'
import { FaWarehouse, FaShippingFast, FaAmazon, FaCogs } from 'react-icons/fa'

const services = [
  {
    title: '3PL/4PL Solutions',
    description: 'Comprehensive logistics management tailored to your business needs. We handle everything from warehousing to transportation, providing end-to-end supply chain solutions.',
    icon: FaWarehouse,
    details: [
      'Warehousing and Distribution',
      'Transportation Management',
      'Inventory Management',
      'Supply Chain Consulting'
    ]
  },
  {
    title: 'Fulfillment Services',
    description: 'Efficient pick, pack, and ship operations to streamline your order processing. We ensure fast and accurate order fulfillment for e-commerce businesses of all sizes.',
    icon: FaShippingFast,
    details: [
      'Order Processing',
      'Pick and Pack',
      'Same-Day Shipping',
      'Returns Management'
    ]
  },
  {
    title: 'FBA Prep',
    description: "Expert preparation of your products for Amazon FBA compliance. We handle all the requirements to ensure your products are ready for Amazon's fulfillment centers.",
    icon: FaAmazon,
    details: [
      'Product Inspection',
      'Labeling and Packaging',
      'Bundle Creation',
      'FBA Shipment Preparation'
    ]
  },
  {
    title: 'Custom Requests',
    description: 'Flexible solutions for unique logistics challenges, including crowdsourcing. We adapt to your specific needs and provide innovative solutions.',
    icon: FaCogs,
    details: [
      'Customized Packaging',
      'Kitting and Assembly',
      'Crowdsourcing Solutions',
      'Special Handling Requirements'
    ]
  },
]

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            At Menifee Logistics, we offer a comprehensive range of logistics services designed to meet the diverse needs of businesses across various industries.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <service.icon className="w-12 h-12 mr-4 text-blue-600" />
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="mt-16 text-center">
            <Link href="/contact" className="btn btn-primary">
              Get a Custom Quote
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default ServicesPage
