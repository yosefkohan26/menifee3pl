'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    quote: "Menifee 3PL has revolutionized our fulfillment process. Their efficient services and competitive pricing have significantly improved our bottom line.",
    author: "Jane Doe",
    company: "E-commerce Solutions Inc.",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    quote: "The team at Menifee 3PL goes above and beyond. Their custom solutions have helped us tackle complex logistics challenges with ease.",
    author: "John Smith",
    company: "Global Retail Co.",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    quote: "Switching to Menifee 3PL for our FBA prep was the best decision we made. Their attention to detail ensures our products always meet Amazon's standards.",
    author: "Emily Johnson",
    company: "Amazon Sellers Group",
    avatar: "/images/testimonial-3.jpg",
  },
]

const Testimonials = () => {
    const [slidesToShow, setSlidesToShow] = useState(3)
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setSlidesToShow(1)
        } else if (window.innerWidth < 1024) {
          setSlidesToShow(2)
        } else {
          setSlidesToShow(3)
        }
      }
  
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    }
  
    return (
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">What Our Clients Say</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-blue-800 rounded-lg p-6 shadow-lg h-full">
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <Image src={testimonial.avatar} alt={testimonial.author} width={48} height={48} className="rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-blue-300">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    )
  }
  
  export default Testimonials