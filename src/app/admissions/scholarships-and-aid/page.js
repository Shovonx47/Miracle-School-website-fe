"use client";

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Calendar, Download, File, HelpCircle, BookOpen, FileText } from 'lucide-react';

const ScholarshipPage = () => {
  const scholarshipTypes = [
    {
      title: "মেধা বৃত্তি",
      coverage: "১০০%",
      requirements: ["জিপিএ ৫.০০", "স্কুলের নিয়মিত ছাত্র", "ভালো আচরণ"],
      duration: "বাৎসরিক",
    },
    {
      title: "অর্ধ-মেধা বৃত্তি",
      coverage: "৫০%",
      requirements: ["জিপিএ ৪.৫০+", "স্কুলের নিয়মিত ছাত্র", "ভালো আচরণ"],
      duration: "বাৎসরিক",
    },
    {
      title: "বিশেষ বৃত্তি",
      coverage: "৭৫%",
      requirements: ["প্রতিভাবান শিক্ষার্থী", "বিশেষ প্রতিভা", "স্কুল প্রতিনিধিত্ব"],
      duration: "বাৎসরিক",
    }
  ];

  const requiredDocuments = [
    {
      name: "শিক্ষাগত সনদ",
      description: "সর্বশেষ শিক্ষাবর্ষের মার্কশীট",
    },
    {
      name: "আয়ের প্রমাণপত্র",
      description: "পিতা-মাতার আয়ের প্রমাণপত্র",
    },
    {
      name: "প্রত্যয়নপত্র",
      description: "বর্তমান শিক্ষা প্রতিষ্ঠানের প্রত্যয়নপত্র",
    },
    {
      name: "অন্যান্য কাগজপত্র",
      description: "জাতীয় পরিচয়পত্র/জন্মনিবন্ধন",
    }
  ];

  const deadlines = [
    {
      title: "আবেদনের শুরু",
      description: "১ জুন, ২০২৪",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "শেষ তারিখ",
      description: "৩০ জুন, ২০২৪",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "ফলাফল",
      description: "১৫ জুলাই, ২০২৪",
      icon: <File className="w-6 h-6" />
    }
  ];

  const handleDownload = () => {
    const pdfUrl = '/documents/scholarship-2024-2025.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Scholarship_Details_2024_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap size={48} className="mr-4" />
            <h1 className="text-4xl font-bold">বৃত্তি এবং আর্থিক সহায়তা</h1>
          </div>
          <p className="text-center text-lg max-w-2xl mx-auto">
            ২০২৪-২০২৫ শিক্ষাবর্ষের জন্য আর্থিক সহায়তা কার্যক্রম
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="container mx-auto px-4 -mt-8 mb-8 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <File className="w-8 h-8 text-primary" />
              <div>
                <h2 className="font-bold text-lg">বৃত্তির সম্পূর্ণ তথ্য</h2>
                <p className="text-sm text-gray-600">বিস্তারিত তথ্য ডাউনলোড করুন</p>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>পিডিএফ ডাউনলোড</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Scholarship Types Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {scholarshipTypes.map((scholarship) => (
            <div key={scholarship.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h3 className="text-xl font-bold">{scholarship.title}</h3>
                <p className="text-sm opacity-90">কভারেজ: {scholarship.coverage}</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  <p className="font-semibold">যোগ্যতা:</p>
                  {scholarship.requirements.map((req, index) => (
                    <p key={index} className="text-gray-600">• {req}</p>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">মেয়াদ: {scholarship.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Required Documents Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">প্রয়োজনীয় কাগজপত্র</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
              {requiredDocuments.map((doc) => (
                <div key={doc.name} className="p-6">
                  <h3 className="font-bold text-lg mb-2">{doc.name}</h3>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deadlines Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">গুরুত্বপূর্ণ তারিখ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {deadlines.map((deadline) => (
              <div key={deadline.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    {deadline.icon}
                  </div>
                  <h3 className="font-bold text-lg">{deadline.title}</h3>
                </div>
                <p className="text-gray-600">{deadline.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-secondary rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">আবেদন করুন</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            আমরা বিশ্বাস করি প্রতিটি মেধাবী শিক্ষার্থীর উচ্চশিক্ষার সুযোগ থাকা উচিত।
            আমাদের বৃত্তি কার্যক্রম আপনার স্বপ্ন পূরণে সহায়তা করবে।
          </p>
          <button className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            অনলাইনে আবেদন করুন
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">প্রশ্ন আছে?</h2>
          <p className="text-gray-600 mb-6">
            আমাদের বৃত্তি বিভাগ আপনার সকল প্রশ্নের উত্তর দিতে প্রস্তুত।
          </p>
          <Link 
            href="/contact-us/contact-information"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;