import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/menifee-warehouse-hero.jpg"
          alt="Menifee Logistics Warehouse"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Streamline Your Logistics with Menifee Logistics
          </h1>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">
            Experience seamless fulfillment, discounted shipping, and expert 3PL/4PL solutions tailored to your business needs.
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-600">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-block">
              Get Started
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300 inline-block">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero