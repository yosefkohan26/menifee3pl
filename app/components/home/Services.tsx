'use client';
import Link from 'next/link'
import AnimatedSection from '../common/AnimatedSection'
import { FaWarehouse, FaBoxOpen, FaAmazon, FaCogs } from 'react-icons/fa'

const services = [
  {
    title: '3PL/4PL Solutions',
    description: 'Comprehensive logistics management tailored to your business needs, including inventory management and order fulfillment.',
    icon: FaWarehouse,
  },
  {
    title: 'Fulfillment Services',
    description: 'Efficient pick, pack, and ship operations to streamline your order processing and improve customer satisfaction.',
    icon: FaBoxOpen,
  },
  {
    title: 'FBA Prep',
    description: 'Expert preparation of your products for Amazon FBA compliance, ensuring smooth delivery to Amazon warehouses.',
    icon: FaAmazon,
  },
  {
    title: 'Custom Requests',
    description: 'Flexible solutions for unique logistics challenges, including crowdsourcing, special packaging, and more.',
    icon: FaCogs,
  },
]

const Services = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Our Comprehensive Services</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <service.icon className="text-blue-600 text-5xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
