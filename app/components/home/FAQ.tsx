'use client';
import { useState } from 'react'

const faqs = [
  {
    question: "What services does Menifee 3PL offer?",
    answer: "Menifee 3PL offers a wide range of services including 3PL/4PL solutions, fulfillment services, FBA prep, custom requests, discounted shipping rates, and storage solutions."
  },
  {
    question: "How does your pricing structure work?",
    answer: "Our pricing is transparent and competitive. We charge $1.00 per pallet per day for under 25 pallets, $0.85 per day per pallet for 25-100 pallets, with volume discounts available for larger quantities. We also have a $6 in and out unloading fee per pallet."
  },
  {
    question: "Do you offer climate-controlled storage?",
    answer: "Currently, we do not offer climate-controlled pallet storage. Our facilities are designed to maintain a stable environment suitable for most products."
  },
  {
    question: "What are your pallet size restrictions?",
    answer: "We accept pallets up to 90 inches in height. Pallets exceeding this height may require special arrangements."
  },
  {
    question: "How do I get started with Menifee 3PL?",
    answer: "Getting started is easy! Simply contact us through our website or give us a call. Our team will assess your needs and provide a tailored solution for your business."
  },
  {
    question: "What types of businesses do you typically work with?",
    answer: "We work with a wide range of businesses, from small e-commerce startups to large multinational corporations. Our services are scalable and can be customized to fit the needs of any business size or industry."
  },
  {
    question: "How quickly can you process and ship orders?",
    answer: "Our standard processing time is 1-2 business days, but we offer same-day shipping for orders received before our cut-off time. We work closely with our clients to meet their specific shipping requirements."
  },
  {
    question: "Do you integrate with e-commerce platforms?",
    answer: "Yes, we integrate seamlessly with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, Amazon, and eBay. This allows for real-time inventory updates and order processing."
  },
  {
    question: "What measures do you take to ensure the security of stored goods?",
    answer: "We employ state-of-the-art security systems, including 24/7 video surveillance, controlled access, and regular security patrols. Additionally, our facilities are equipped with advanced fire protection systems."
  },
  {
    question: "Can you handle international shipping?",
    answer: "Absolutely! We have extensive experience in international shipping and can help navigate customs requirements, documentation, and logistics for global distribution."
  }

]


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white rounded-b-lg shadow-md mt-1">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ