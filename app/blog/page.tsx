import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Future of 3PL: Trends to Watch",
    excerpt: "Explore the emerging trends shaping the future of third-party logistics and how they might impact your business.",
    image: "/images/blog-future-3pl.jpg",
    date: "May 15, 2023",
    slug: "future-of-3pl-trends"
  },
  {
    title: "Optimizing Your Supply Chain for E-commerce Growth",
    excerpt: "Learn strategies to streamline your supply chain and support rapid e-commerce expansion.",
    image: "/images/blog-ecommerce-growth.jpg",
    date: "April 28, 2023",
    slug: "optimizing-supply-chain-ecommerce"
  },
  {
    title: "Sustainability in Logistics: Best Practices",
    excerpt: "Discover how to implement eco-friendly practices in your logistics operations without sacrificing efficiency.",
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
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
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