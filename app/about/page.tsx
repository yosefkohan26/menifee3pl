import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '../components/common/AnimatedSection'

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Menifee Logistics</h1>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Menifee Logistics was founded with a vision to revolutionize the logistics industry. We recognized the need for a more efficient, transparent, and customer-centric approach to third-party logistics.
              </p>
              <p className="text-gray-700">
                Since our inception, we've been dedicated to providing innovative solutions that help businesses of all sizes streamline their supply chain operations and focus on growth. Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses across various industries.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/menifee-warehouse.jpg"
                alt="Menifee Logistics Warehouse"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Our Mission</h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              To empower businesses with cutting-edge logistics solutions that drive efficiency, reduce costs, and enhance customer satisfaction. We strive to be more than just a service provider – we aim to be a trusted partner in our clients' success.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-700">
                Our team brings years of experience in logistics, technology, and customer service to provide unparalleled support.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously invest in the latest technologies to offer state-of-the-art solutions for our clients.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
              <p className="text-gray-700">
                Your success is our success. We tailor our services to meet your unique needs and challenges.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to optimize your logistics?</h2>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Get Started Today
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default AboutPage
