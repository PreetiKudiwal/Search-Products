import React, { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setEmailError('Email is required');
    } else if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
      // form submission logic here
      console.log('Form submitted:', email);
    }
  }

  return (
    <>
      {/* Title Section */}
      <div className="bg-[url('/images/bg-01.jpg')] bg-cover bg-center py-24 px-4 text-center">
        <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-white text-center">Contact</h2>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-800">
            <h4 className="text-2xl font-semibold text-center text-gray-800 mb-8">Send Us A Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-lg py-3 pl-14 pr-4 text-gray-700 placeholder-gray-400"
                />
                <img
                  src="/images/icon-email.png"
                  alt="Email Icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
              </div>
              {emailError && <p className="text-red-600 text-sm mb-4">{emailError}</p>}

              <div className="mb-6">
                <textarea
                  name="msg"
                  placeholder="How Can We Help?"
                  className="w-full border border-gray-300 rounded-lg p-4 h-40 resize-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-xl border border-gray-800 rounded-xl p-8 flex flex-col gap-10">
            {/* Address */}
            <div className="flex gap-4">
              <span className="text-blue-600 text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <h5 className="text-xl font-semibold">Address</h5>
                <p className="text-gray-600 mt-2">
                  Trove Store Center, 5th Floor, 214 MG Road, Bengaluru, KA 560001 IN
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <span className="text-blue-600 text-2xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <div>
                <h5 className="text-xl font-semibold">Let’s Talk</h5>
                <p className="text-gray-600 mt-2">+91 840 123 6879</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <span className="text-blue-600 text-2xl">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <h5 className="text-xl font-semibold">Sale Support</h5>
                <p className="text-gray-600 mt-2">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[450px]">
        <iframe
          title="Bengaluru Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.071478880786!2d77.5656346!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c63f89cb%3A0x57e0b7e1450dd0a5!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1614152048761!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
