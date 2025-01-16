"use client";
import React, { useState } from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What are the admission requirements for the upcoming academic year?",
      answer: "Our admission requirements include:\n- Completed application form\n- Previous academic records\n- Two letters of recommendation\n- Recent passport-size photograph\n- Valid ID proof\n- Entrance test scores (if applicable)\n\nPlease ensure all documents are submitted before the deadline."
    },
    {
      question: "What is the admission process timeline?",
      answer: "The admission process typically follows this schedule:\n- Application Opens: January 15th\n- Early Bird Deadline: March 1st\n- Regular Application Deadline: April 30th\n- Entrance Tests: May 15th-20th\n- Results Declaration: June 1st\n- Admission Confirmation: Within 2 weeks of results"
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer several scholarship opportunities:\n- Merit-based academic scholarships\n- Sports excellence scholarships\n- Need-based financial aid\n- Sibling discounts\n- Early bird application discounts\n\nEach scholarship has specific eligibility criteria and application processes."
    },
    {
      question: "What are the age requirements for different grades?",
      answer: "Our age requirements as of June 1st are:\n- Kindergarten: 5 years\n- Grade 1: 6 years\n- Grade 2: 7 years\nAnd so on. We may consider a 3-month relaxation in special cases."
    },
    {
      question: "How can I schedule a campus tour?",
      answer: "Campus tours can be scheduled through:\n- Online booking through our website\n- Calling our admissions office at (555) 123-4567\n- Emailing us at admissions@school.edu\n\nTours are available Monday through Friday, 9 AM to 3 PM."
    },
    {
      question: "What extracurricular activities are offered?",
      answer: "We offer a wide range of extracurricular activities including:\n- Sports (Basketball, Soccer, Swimming)\n- Arts (Music, Dance, Drama)\n- Clubs (Science, Debate, Photography)\n- Community Service Programs\n- Leadership Development Activities"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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