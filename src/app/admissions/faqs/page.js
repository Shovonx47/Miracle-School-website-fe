"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('https://miracle-school-landing-page-be.vercel.app/api/v1/faqs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFaqData(data.faqs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setError('Error fetching FAQs. Please try again later.');
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap size={48} className="mr-4" />
            <h1 className="text-4xl font-bold">Admission FAQ</h1>
          </div>
          <p className="text-center text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about our admission process, requirements, and school policies.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-secondary transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-left font-semibold text-primary">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 bg-white border-t border-gray-100">
                  <p className="text-gray-700 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Contact our admissions team
          </p>
          <Link 
            href="/contact-us/contact-information"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;