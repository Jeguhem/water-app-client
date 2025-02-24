"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Transition } from "@headlessui/react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How long does delivery typically take?",
      answer:
        "We deliver within 24 hours of order placement. For emergency deliveries, we offer same-day service within 6 hours in Lagos Island area.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "Our minimum order quantity is 1,000 liters. We offer deliveries in increments of 1,000 liters up to 10,000 liters per order.",
    },
    {
      question: "How do you ensure water quality?",
      answer:
        "All our water sources are NAFDAC certified and undergo daily laboratory testing. We maintain strict quality control measures throughout the delivery process.",
    },
    {
      question: "Do you offer regular delivery schedules?",
      answer:
        "Yes, we offer weekly, bi-weekly, and monthly delivery schedules. You can set up a recurring delivery plan that suits your needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, credit/debit cards, and mobile payments including PayStack and Flutterwave.",
    },
    {
      question: "What happens if I'm not satisfied with the service?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not happy with our service, we'll either re-deliver or provide a full refund.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 flex items-center justify-between rounded-lg bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <span className="ml-4 flex-shrink-0 p-2 bg-blue-100 rounded-full text-blue-900">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <Transition
                show={openIndex === index}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div className="px-6 py-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
