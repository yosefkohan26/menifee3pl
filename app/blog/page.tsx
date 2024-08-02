import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Future of 3PL: Trends to Watch",
    excerpt: "Explore the emerging trends shaping the future of third-party logistics, including AI, IoT, robotics, blockchain, and last-mile innovations. Discover how these advancements will impact your business and the entire logistics industry.",
    image: "/images/blog-future-3pl.jpg",
    date: "May 15, 2023",
    slug: "future-of-3pl-trends"
  },
  {
    title: "Optimizing Your Supply Chain for E-commerce Growth",
    excerpt: "Learn essential strategies to streamline your supply chain and support rapid e-commerce expansion. From implementing advanced order management systems to leveraging data analytics and collaborating with 3PL partners, discover how to create a more agile and responsive supply chain.",
    image: "/images/blog-ecommerce-growth.jpg",
    date: "April 28, 2023",
    slug: "optimizing-supply-chain-ecommerce"
  },
  {
    title: "Sustainability in Logistics: Best Practices",
    excerpt: "Discover comprehensive approaches to implement eco-friendly practices in your logistics operations without sacrificing efficiency. Learn about green transportation, sustainable packaging, energy-efficient warehousing, and other key strategies to reduce your environmental impact and enhance your brand reputation.",
    image: "/images/blog-sustainability.jpg",
    date: "April 10, 2023",
    slug: "sustainability-in-logistics"
  }
]

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Logistics Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
