import React from 'react';
import { Transition } from '@headlessui/react';
import { Shield, Award, Users, TrendingUp, Truck, Factory, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Add scroll animation comment */}
            {/* Animation: Fade in and slide up */}
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionizing Water Delivery in Lagos
            </h1>
            <p className="text-xl text-gray-300">
              Bringing clean, safe water to every home and business in Lagos Island.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Add scroll animation comment */}
            {/* Animation: Fade in and slide from left */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                To provide accessible, pure water solutions through innovative delivery systems, 
                ensuring every resident of Lagos Island has access to clean, safe water whenever they need it.
              </p>
            </div>
            {/* Add scroll animation comment */}
            {/* Animation: Fade in and slide from right */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading water delivery service in Lagos, known for reliability, 
                quality, and customer satisfaction, while contributing to community health and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Water Factory Partners */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16">For Water Factories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Expand Your Reach",
                  description: "Connect with new customers across Lagos Island through our platform"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Increased Revenue",
                  description: "Tap into high-volume residential and commercial delivery opportunities"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Quality Partnership",
                  description: "Join our network of certified water providers"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-900 mb-4 
                                 transform transition-transform hover:scale-110 duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trucking Partners */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-16">For Trucking Companies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Truck className="w-8 h-8" />,
                  title: "Consistent Orders",
                  description: "Regular delivery routes and steady order flow"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Growing Network",
                  description: "Access to expanding customer base in premium locations"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Premium Partnership",
                  description: "Become a certified delivery partner with competitive rates"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-900 mb-4
                                 transform transition-transform hover:scale-110 duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Partner With Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="text-gray-600">
                    Interested in partnering with us? Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: <Phone className="w-5 h-5" />, text: "+234 123 456 7890" },
                    { icon: <Mail className="w-5 h-5" />, text: "partners@aquapure.com" },
                    { icon: <MapPin className="w-5 h-5" />, text: "Victoria Island, Lagos" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-600">
                      <div className="text-blue-900">{contact.icon}</div>
                      <span>{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Partner Type</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Water Factory</option>
                    <option>Trucking Company</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 
                                 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;