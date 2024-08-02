'use client'
import React, { useState, useEffect } from 'react';
import { InlineWidget } from "react-calendly";
import Head from 'next/head';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 min-h-screen text-white font-sans">
      <Head>
        <title>ShipBuddy Shipping Services | Save Up to 70% on FedEx & UPS Shipping</title>
        <meta name="description" content="Slash your shipping costs by up to 70% with ShipBuddy's exclusive FedEx and UPS discounts. Authorized reseller beating Shippo, ShipStation, eBay, and Amazon rates." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Stop Overpaying for Shipping with ShipBuddy!
        </h1>
        <p className="text-xl md:text-2xl mb-4">
          Authorized Reseller of FedEx & UPS | 100% Legal & Legitimate
        </p>
        <p className="text-lg mb-8">
          <a href="tel:3104829495" className="text-yellow-400 hover:underline">Call Now: (310) 482-9495</a>
        </p>
        <div className="bg-yellow-400 text-blue-900 rounded-lg p-4 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">🔥 Exclusive Offer for $10k+/Month Shippers 🔥</h2>
          <p className="text-lg md:text-xl mb-4">
            Book a call now and get your first month of shipping at our cost - ZERO markup for 30 days!
          </p>
          <button onClick={() => document.getElementById('calendly-widget').scrollIntoView({ behavior: 'smooth' })} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg md:text-xl transition duration-300 transform hover:scale-105">
            Claim Your Free Month Now
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose ShipBuddy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Beat the Big Players", description: "We consistently outperform Shippo, ShipStation, eBay, and Amazon rates, especially for heavier items." },
              { title: "100% Legitimate", description: "Authorized reseller with negotiated volume discounts. No stolen or fraudulent labels - everything is tied to our company." },
              { title: "Instant Massive Savings", description: "Access rates reserved for $150M+ shippers immediately. Save up to 70% on your shipping costs!" },
            ].map((feature, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="bg-white text-blue-900 p-8 rounded-lg">
            <ol className="list-decimal list-inside space-y-4">
              <li>Book a free consultation with our shipping experts</li>
              <li>We analyze your shipping data and show you exact savings</li>
              <li>Sign up and start shipping immediately</li>
              <li>Enjoy massive savings and 24/7 support</li>
            </ol>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Real Results from Real Clients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Mike Johnson",
                company: "ElectroHub",
                image: "/mike-johnson.jpg",
                quote: "We were skeptical about the claims, but ShipBuddy delivered. We're saving 65% on our heavy electronics shipments compared to our previous rates.",
                savings: "65% savings on heavy items"
              },
              {
                name: "Emily Chen",
                company: "FashionFwd",
                image: "/emily-chen.jpg",
                quote: "ShipBuddy's rates beat Amazon's by a mile for our clothing shipments. We've cut our shipping costs in half!",
                savings: "50% savings vs Amazon rates"
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-blue-900 p-6 rounded-lg flex flex-col items-center">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mb-4" />
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm mb-2">{testimonial.company}</p>
                <p className="text-green-600 font-bold">{testimonial.savings}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="calendly-widget" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Free Consultation</h2>
          <div className="bg-white rounded-lg p-4">
            <InlineWidget url="https://calendly.com/yosefkohanyk/30min" styles={{ height: '630px' }} />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is this service legal and legitimate?", a: "Absolutely! We are an authorized reseller for FedEx and UPS. Our volume-based discounts are 100% legitimate and tied to our company accounts." },
              { q: "How do you compare to Shippo, ShipStation, and others?", a: "We consistently beat their rates, especially for heavier items. On average, our clients save 45-70% compared to other shipping solutions." },
              { q: "Is there a minimum shipping volume required?", a: "Our service is optimized for businesses shipping over $10,000 per month. If you're close to this threshold, let's talk – we might still be able to help." },
              { q: "How quickly can I start saving?", a: "You can start saving immediately after your account is set up, which typically takes 1-2 business days." },
            ].map((faq, index) => (
              <details key={index} className="bg-blue-800 p-4 rounded-lg">
                <summary className="font-bold cursor-pointer">{faq.q}</summary>
                <p className="mt-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Slash Your Shipping Costs?</h2>
          <p className="text-xl mb-8">
            Don't let another day go by overpaying for shipping. Book your free consultation now and start saving immediately.
          </p>
          <button onClick={() => document.getElementById('calendly-widget').scrollIntoView({ behavior: 'smooth' })} className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
            Book Your Free Consultation
          </button>
        </section>
      </main>

      <footer className="bg-blue-900 text-center py-8">
        <p className="mb-2">ShipBuddy Shipping Services</p>
        <p className="mb-2">18500 Ventura Blvd, Suite 205, Tarzana, CA 91356</p>
        <p>&copy; 2023 ShipBuddy Shipping Services. All rights reserved.</p>
      </footer>

      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-blue-900 p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Wait! Don't Miss Out on Huge Savings!</h2>
            <p className="mb-4">Book your free consultation now and we'll guarantee to beat your current shipping rates or we'll pay for your first month of shipping!</p>
            <button onClick={() => document.getElementById('calendly-widget').scrollIntoView({ behavior: 'smooth' })} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
              Yes, I Want to Save!
            </button>
            <button onClick={() => setShowExitIntent(false)} className="ml-4 text-blue-900 underline">
              No thanks, I prefer higher shipping costs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
