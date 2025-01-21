"use client";

import React from 'react';
import Link from 'next/link';
import { UserPlus, Calendar, FileText, CheckCircle2, BookOpen, HelpCircle, Download, File, GraduationCap, ClipboardCheck } from 'lucide-react';

const AdmissionsPage = () => {
  const academicYear = "২০২৪-২০২৫";

  const handleDownload = () => {
    const pdfUrl = '/documents/admission-process-2024-2025.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `ভর্তি_প্রক্রিয়া_${academicYear}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const admissionSteps = [
    {
      title: "অনলাইন আবেদন",
      description: "ওয়েবসাইটে প্রাথমিক তথ্য পূরণ করে আবেদন করুন",
      icon: <FileText className="w-6 h-6" />,
      status: "চলমান"
    },
    {
      title: "ভর্তি পরীক্ষা",
      description: "নির্ধারিত তারিখে লিখিত ও মৌখিক পরীক্ষায় অংশগ্রহণ",
      icon: <ClipboardCheck className="w-6 h-6" />,
      status: "আসন্ন"
    },
    {
      title: "ফলাফল প্রকাশ",
      description: "ওয়েবসাইট ও SMS এর মাধ্যমে ফলাফল জানানো হবে",
      icon: <CheckCircle2 className="w-6 h-6" />,
      status: "আসন্ন"
    }
  ];

  const eligibilityCriteria = [
    {
      grade: "ষষ্ঠ শ্রেণি",
      requirements: [
        "সর্বনিম্ন জিপিএ ৪.০",
        "বয়স ১১-১৩ বছর",
        "মৌখিক পরীক্ষায় উত্তীর্ণ"
      ]
    },
    {
      grade: "সপ্তম শ্রেণি",
      requirements: [
        "সর্বনিম্ন জিপিএ ৪.০",
        "বয়স ১২-১৪ বছর",
        "মৌখিক পরীক্ষায় উত্তীর্ণ"
      ]
    },
    {
      grade: "অষ্টম শ্রেণি",
      requirements: [
        "সর্বনিম্ন জিপিএ ৪.০",
        "বয়স ১৩-১৫ বছর",
        "মৌখিক পরীক্ষায় উত্তীর্ণ"
      ]
    }
  ];

  const requiredDocuments = [
    {
      name: "শিক্ষাগত সনদ",
      items: [
        "সর্বশেষ বার্ষিক পরীক্ষার মার্কশীট",
        "স্থানান্তর সনদপত্র (টি.সি)",
        "চারিত্রিক সনদপত্র"
      ]
    },
    {
      name: "ব্যক্তিগত তথ্য",
      items: [
        "জন্মনিবন্ধন সনদ",
        "পাসপোর্ট সাইজ ছবি (৪ কপি)",
        "অভিভাবকের জাতীয় পরিচয়পত্র"
      ]
    },
    {
      name: "অন্যান্য কাগজপত্র",
      items: [
        "বাসস্থানের প্রমাণপত্র",
        "টিকা প্রদানের সনদ",
        "রক্তের গ্রুপের সনদ"
      ]
    }
  ];

  const importantDates = [
    {
      event: "আবেদন শুরু",
      date: "১ জানুয়ারি, ২০২৪",
      status: "সম্পন্ন"
    },
    {
      event: "আবেদনের শেষ তারিখ",
      date: "৩১ জানুয়ারি, ২০২৪",
      status: "চলমান"
    },
    {
      event: "ভর্তি পরীক্ষা",
      date: "১৫ ফেব্রুয়ারি, ২০২৪",
      status: "আসন্ন"
    },
    {
      event: "ফলাফল প্রকাশ",
      date: "২৮ ফেব্রুয়ারি, ২০২৪",
      status: "আসন্ন"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <UserPlus size={48} className="mr-4" />
            <h1 className="text-4xl font-bold">ভর্তি প্রক্রিয়া</h1>
          </div>
          <p className="text-center text-lg max-w-2xl mx-auto">
            {academicYear} শিক্ষাবর্ষের ভর্তি প্রক্রিয়া সম্পর্কিত সকল তথ্য
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
                <h2 className="font-bold text-lg">ভর্তি নির্দেশিকা</h2>
                <p className="text-sm text-gray-600">ভর্তি প্রক্রিয়ার বিস্তারিত তথ্য ডাউনলোড করুন</p>
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
        {/* Admission Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">ভর্তি প্রক্রিয়ার ধাপসমূহ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {admissionSteps.map((step) => (
              <div key={step.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {step.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">যোগ্যতার মানদণ্ড</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria) => (
              <div key={criteria.grade} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary text-white p-6">
                  <h3 className="text-xl font-bold">{criteria.grade}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {criteria.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">প্রয়োজনীয় কাগজপত্র</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 divide-x divide-gray-200">
              {requiredDocuments.map((doc) => (
                <div key={doc.name} className="p-6">
                  <h3 className="font-bold text-lg mb-4">{doc.name}</h3>
                  <ul className="space-y-2">
                    {doc.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">গুরুত্বপূর্ণ তারিখসমূহ</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-4 divide-x divide-gray-200">
              {importantDates.map((date) => (
                <div key={date.event} className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{date.event}</h3>
                  <p className="text-primary font-bold mb-2">{date.date}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    date.status === 'সম্পন্ন' ? 'bg-green-100 text-green-800' :
                    date.status === 'চলমান' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {date.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Now Section */}
        <div className="bg-secondary rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">আবেদন করুন</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য আজই আবেদন করুন। 
            প্রয়োজনীয় সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
          <Link 
            href="/admissions/apply"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            অনলাইনে আবেদন করুন
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">প্রশ্ন আছে?</h2>
          <p className="text-gray-600 mb-6">
            ভর্তি প্রক্রিয়া সম্পর্কে কোন প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন
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

export default AdmissionsPage;