import React from "react";

export default function About() {
  return (
    <div>
  <div className="bg-[url('/images/bg-01.jpg')] bg-cover bg-center text-center px-4 py-24">
    <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-white text-center">About</h2>
  </div>

  <div className="bg-white pt-20 pb-32">
    <div className="container mx-auto px-4">
      
      {/* Our Story */}
      <div className="flex flex-col lg:flex-row mb-36 gap-10">
        <div className="lg:w-2/3 md:w-full">
          <div className="pt-2 pr-4 md:pr-8 lg:pr-4">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 pb-4">
              Our Story
            </h3>
            <p className="text-justify tracking-wider leading-7 me-0 md:me-8 text-gray-600 pb-6 text-sm md:text-base">
              At [Your Brand Name], our journey began with a simple yet powerful idea — to make high-quality products accessible to everyone, without compromising on style, value, or authenticity. Born from passion and purpose, we started as a small team of dreamers and doers with a shared vision: to create an online shopping experience that feels personal, trustworthy, and inspiring. Every product we offer is handpicked or thoughtfully designed to bring joy, comfort, and confidence to your everyday life. We believe that shopping should be more than just a transaction. It should be a connection — between people, between ideas, and between style and self-expression. That’s why we’re committed to building a brand that values transparency, customer satisfaction, and community. From our first order to the thousands we've shipped since, we remain dedicated to delivering quality, care, and innovation in everything we do. Whether you're here for something special or just browsing, we’re grateful you're a part of our story.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-5/12 w-11/12 mx-auto">
          <div className="border-2 border-gray-200 p-2">
            <div className="overflow-hidden">
              <img
                src="/images/about-01.jpg"
                alt="About"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="lg:order-2 lg:w-2/3 md:w-full mb-8 lg:mb-0">
          <div className="pt-2 pl-4 md:pl-8 lg:pl-4">
            <h3 className="text-xl md:text-2xl ms-0 md:ms-8 font-semibold text-gray-800 pb-4">
              Our Mission
            </h3>
            <p className="text-justify ms-0 md:ms-8 text-gray-600 pb-6 tracking-wider leading-7 text-sm md:text-base">
              Our mission is simple — to empower everyday shoppers with exceptional products that combine quality, style, and affordability. We strive to make online shopping effortless, enjoyable, and full of value. Whether you're upgrading your lifestyle, treating yourself, or finding the perfect gift, we're here to ensure every click leads to something special. At the heart of everything we do is a commitment to: Customer Satisfaction: Your happiness is our priority. Integrity & Quality: We only offer products we truly believe in. Innovation: We’re always exploring better ways to serve you. Sustainability: We care about our planet and the impact we create. We’re more than just an online store — we’re a growing community that believes in meaningful connections, thoughtful curation, and raising the bar for modern e-commerce. With every purchase, you're not just supporting a business — you're becoming part of a movement that values purpose and passion.
            </p>
          </div>
        </div>
        <div className="lg:order-1 lg:w-1/3 md:w-5/12 w-11/12 mx-auto mb-8 lg:mb-0">
          <div className="border-2 border-gray-200 p-2">
            <div className="overflow-hidden">
              <img
                src="/images/gallery-09.jpg"
                alt="Mission"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

  );
}
