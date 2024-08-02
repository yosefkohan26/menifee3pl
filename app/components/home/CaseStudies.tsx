
import Image from 'next/image'
import Link from 'next/link'

const caseStudies = [
  {
    title: "E-commerce Giant Reduces Shipping Costs by 30%",
    description: "Learn how we helped a major e-commerce player optimize their logistics and significantly cut costs.",
    image: "/images/case-study-1.jpg",
    link: "/case-studies/ecommerce-giant"
  },
  {
    title: "Startup Scales Operations with Custom Fulfillment Solution",
    description: "Discover how our tailored approach enabled a fast-growing startup to meet increasing demand.",
    image: "/images/case-study-2.jpg",
    link: "/case-studies/startup-scales"
  },
  {
    title: "Global Brand Streamlines FBA Prep Process",
    description: "See how we improved efficiency and compliance for a global brand's Amazon FBA operations.",
    image: "/images/case-study-3.jpg",
    link: "/case-studies/global-brand-fba"
  }
]

const CaseStudies = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
                <Image src={study.image} alt={study.title} width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link href={study.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default CaseStudies