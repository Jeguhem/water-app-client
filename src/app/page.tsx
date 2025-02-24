"use client";
import React, { useState } from "react";
import {
  Droplet,
  Truck,
  Clock,
  Shield,
  Phone,
  Calendar,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  const [volume, setVolume] = useState(1000); // Default 1000 liters

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Pure Water, <br />
              Delivered to You
            </h1>
            <p className="text-xl text-gray-200">
              Premium water delivery service in Lagos Island. Clean, safe, and
              reliable - straight to your doorstep.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Order Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 -mt-20 shadow-xl relative z-20">
            <h2 className="text-2xl font-bold text-center mb-8">
              Quick Water Calculator
            </h2>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div>
                <label className="block text-gray-700 mb-2">
                  Select Volume (Liters)
                </label>
                <select
                  className="w-full p-3 border rounded-md"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                >
                  <option value={1000}>1,000 L</option>
                  <option value={2000}>2,000 L</option>
                  <option value={5000}>5,000 L</option>
                  <option value={10000}>10,000 L</option>
                </select>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Estimated Price</p>
                <p className="text-3xl font-bold text-blue-900">
                  ₦{(volume * 0.5).toLocaleString()}
                </p>
              </div>
              <button className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose AquaPure
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplet className="w-8 h-8" />,
                title: "Pure & Clean",
                description:
                  "Laboratory tested water meeting international standards",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Swift Delivery",
                description: "Same-day delivery across Lagos Island",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Service",
                description: "Round-the-clock water delivery when you need it",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assured",
                description: "NAFDAC approved sources and regular testing",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-900 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Place Your Order",
                description:
                  "Choose your water volume and delivery time through our easy-to-use platform",
              },
              {
                step: "2",
                title: "We Process",
                description:
                  "Our team prepares your order from our certified water sources",
              },
              {
                step: "3",
                title: "Swift Delivery",
                description:
                  "Our trusted delivery partners bring clean water to your doorstep",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Quality Guarantee</h2>
              <div className="space-y-4">
                {[
                  "NAFDAC Certified Water Sources",
                  "Regular Laboratory Testing",
                  "Sealed and Tamper-Proof Delivery",
                  "Quality Monitoring at Every Stage",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 bg-blue-800 rounded-lg" />{" "}
            {/* Image placeholder */}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Service Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Victoria Island",
              "Ikoyi",
              "Lekki Phase 1",
              "Banana Island",
              "Oniru",
              "Lagos Island",
            ].map((area, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <MapPin className="w-6 h-6 text-blue-900" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready for Clean Water Delivery?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying pure, clean water
            delivered to their doorstep.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Delivery
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Premium water delivery service ensuring clean, safe water for
                Lagos Island residents.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/order">Order Now</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/areas">Service Areas</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Hotline: 0800-AQUA-PURE</li>
                <li>Email: info@aquapure.com</li>
                <li>Victoria Island, Lagos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social media icons placeholder */}
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div className="w-10 h-10 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 AquaPure Water Delivery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
