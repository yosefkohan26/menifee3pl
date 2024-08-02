import { notFound } from 'next/navigation'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Future of 3PL: Trends to Watch",
    content: "The third-party logistics (3PL) industry is rapidly evolving, driven by technological advancements and changing consumer expectations. Key trends shaping the future of 3PL include:\n\n1. AI and Machine Learning: Predictive analytics for demand forecasting and route optimization.\n2. Internet of Things (IoT): Real-time tracking and monitoring of shipments and inventory.\n3. Robotics and Automation: Enhancing warehouse efficiency and reducing labor costs.\n4. Blockchain: Improving transparency and security in supply chain transactions.\n5. Last-Mile Innovation: Drones and autonomous vehicles for faster, more efficient deliveries.\n\nAs these trends continue to develop, 3PL providers must adapt to stay competitive and meet the evolving needs of their clients. Businesses partnering with 3PLs should seek providers who are at the forefront of these innovations to ensure they're well-positioned for future growth and efficiency.",
    image: "/images/blog-future-3pl.jpg",
    date: "May 15, 2023",
    slug: "future-of-3pl-trends"
  },
  {
    title: "Optimizing Your Supply Chain for E-commerce Growth",
    content: "As e-commerce continues to boom, businesses must optimize their supply chains to keep pace with demand and maintain customer satisfaction. Here are key strategies to streamline your supply chain for e-commerce growth:\n\n1. Implement an Order Management System (OMS): Centralize order processing and inventory management across all sales channels.\n2. Adopt a Distributed Inventory Model: Strategically place inventory closer to customers to reduce shipping times and costs.\n3. Leverage Data Analytics: Use data-driven insights to forecast demand, optimize inventory levels, and improve decision-making.\n4. Automate Warehouse Processes: Implement robotics and AI-driven systems to increase picking and packing efficiency.\n5. Offer Multiple Fulfillment Options: Provide choices like same-day delivery, in-store pickup, and ship-from-store to meet diverse customer needs.\n6. Invest in Reverse Logistics: Streamline returns processes to enhance customer satisfaction and recapture value.\n7. Collaborate with 3PL Partners: Leverage expertise and resources of third-party logistics providers to scale operations efficiently.\n\nBy implementing these strategies, e-commerce businesses can create a more agile, responsive supply chain that supports growth and enhances customer experience.",
    image: "/images/blog-ecommerce-growth.jpg",
    date: "April 28, 2023",
    slug: "optimizing-supply-chain-ecommerce"
  },
  {
    title: "Sustainability in Logistics: Best Practices",
    content: "As environmental concerns grow, implementing sustainable practices in logistics operations has become crucial. Here are best practices for enhancing sustainability in your logistics processes:\n\n1. Green Transportation:\n   - Optimize routes to reduce fuel consumption and emissions\n   - Transition to electric or hybrid vehicles for last-mile delivery\n   - Explore alternative fuels like biodiesel or hydrogen\n\n2. Sustainable Packaging:\n   - Use recycled and recyclable materials\n   - Implement right-sized packaging to reduce waste\n   - Explore biodegradable packaging options\n\n3. Energy-Efficient Warehousing:\n   - Install LED lighting and motion sensors\n   - Implement solar panels or other renewable energy sources\n   - Use energy-efficient HVAC systems\n\n4. Waste Reduction:\n   - Implement a comprehensive recycling program\n   - Minimize paper use through digitalization\n   - Properly dispose of or recycle electronic waste\n\n5. Sustainable Supplier Partnerships:\n   - Choose suppliers with strong environmental credentials\n   - Collaborate on reducing packaging and optimizing shipments\n\n6. Carbon Offsetting:\n   - Invest in carbon offset projects to neutralize unavoidable emissions\n\n7. Employee Education:\n   - Train staff on sustainable practices and their importance\n\nBy adopting these practices, logistics operations can significantly reduce their environmental impact while often realizing cost savings and improved efficiency. As consumers increasingly prioritize sustainability, these efforts can also enhance brand reputation and customer loyalty.",
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
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
