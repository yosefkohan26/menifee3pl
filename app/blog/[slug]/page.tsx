import { notFound } from 'next/navigation'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Future of 3PL: Trends to Watch",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/blog-future-3pl.jpg",
    date: "May 15, 2023",
    slug: "future-of-3pl-trends"
  },
  {
    title: "Optimizing Your Supply Chain for E-commerce Growth",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    image: "/images/blog-ecommerce-growth.jpg",
    date: "April 28, 2023",
    slug: "optimizing-supply-chain-ecommerce"
  },
  {
    title: "Sustainability in Logistics: Best Practices",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    image: "/images/blog-sustainability.jpg",
    date: "April 10, 2023",
    slug: "sustainability-in-logistics"
  }
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Image src={post.image} alt={post.title} width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.date}</p>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost