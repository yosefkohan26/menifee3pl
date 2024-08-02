
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: "The Future of 3PL: Trends to Watch",
    excerpt: "Explore the emerging trends shaping the future of third-party logistics, including AI, IoT, robotics, blockchain, and last-mile innovations.",
    image: "/images/blog-future-3pl.jpg",
    date: "May 15, 2023",
    slug: "future-of-3pl-trends"
  },
  {
    title: "Optimizing Your Supply Chain for E-commerce Growth",
    excerpt: "Learn essential strategies to streamline your supply chain and support rapid e-commerce expansion.",
    image: "/images/blog-ecommerce-growth.jpg",
    date: "April 28, 2023",
    slug: "optimizing-supply-chain-ecommerce"
  },
  {
    title: "Sustainability in Logistics: Best Practices",
    excerpt: "Discover comprehensive approaches to implement eco-friendly practices in your logistics operations without sacrificing efficiency.",
    image: "/images/blog-sustainability.jpg",
    date: "April 10, 2023",
    slug: "sustainability-in-logistics"
  }
]

const BlogPosts = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
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

export default BlogPosts
