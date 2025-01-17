'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, Calendar, CreditCard, FileText, BookOpen, HelpCircle, Download, File } from 'lucide-react';

const TuitionFeesPage = () => {
  const academicYear = "২০২৪-২০২৫";
  
  const tuitionData = {
    elementary: {
      title: "প্রাথমিক বিদ্যালয়",
      grades: "শ্রেণি ১-৫",
      annual: 12500,
      term: 4200,
      monthly: 1250,
    },
    middle: {
      title: "মাধ্যমিক বিদ্যালয়",
      grades: "শ্রেণি ৬-৮",
      annual: 14500,
      term: 4850,
      monthly: 1450,
    },
    high: {
      title: "উচ্চ বিদ্যালয়",
      grades: "শ্রেণি ৯-১২",
      annual: 16500,
      term: 5500,
      monthly: 1650,
    }
  };

  const additionalFees = [
    {
      name: "ভর্তি ফি",
      amount: 500,
      frequency: "একবার",
      description: "নতুন শিক্ষার্থীদের জন্য ভর্তির সময় প্রযোজ্য"
    },
    {
      name: "প্রযুক্তি ফি",
      amount: 300,
      frequency: "বার্ষিক",
      description: "ডিজিটাল শিক্ষা সামগ্রী এবং আইটি অবকাঠামোর জন্য"
    },
    {
      name: "ল্যাবরেটরি ফি",
      amount: 250,
      frequency: "বার্ষিক",
      description: "বিজ্ঞানাগার সরঞ্জাম এবং উপকরণের জন্য"
    },
    {
      name: "কার্যক্রম ফি",
      amount: 200,
      frequency: "বার্ষিক",
      description: "খেলাধুলা, ক্লাব এবং সহ-পাঠক্রম কার্যক্রমের জন্য"
    }
  ];

  const paymentPlans = [
    {
      title: "বার্ষিক পেমেন্ট",
      description: "১ জুনের আগে সম্পূর্ণ পেমেন্টে ৫% ছাড়",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "টার্ম পেমেন্ট",
      description: "প্রতি টার্মের শুরুতে তিনটি কিস্তি",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "মাসিক পেমেন্ট",
      description: "১০টি মাসিক কিস্তি (আগস্ট-মে)",
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  const handleDownload = () => {
    const pdfUrl = '/documents/tuition-fees-2024-2025.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `বেতন_এবং_ফি_${academicYear}.pdf`;
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
            <Calculator size={48} className="mr-4" />
            <h1 className="text-4xl font-bold">বেতন ও ফি</h1>
          </div>
          <p className="text-center text-lg max-w-2xl mx-auto">
            {academicYear} শিক্ষাবর্ষের জন্য আপনার সন্তানের ভবিষ্যতে বিনিয়োগ
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
                <h2 className="font-bold text-lg">সম্পূর্ণ ফি কাঠামো</h2>
                <p className="text-sm text-gray-600">বেতন ও ফি সম্পর্কিত বিস্তারিত তথ্য ডাউনলোড করুন</p>
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
        {/* Tuition Rates Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.values(tuitionData).map((level) => (
            <div key={level.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h3 className="text-xl font-bold">{level.title}</h3>
                <p className="text-sm opacity-90">{level.grades}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary">৳{level.annual.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">বার্ষিক বেতন</p>
                </div>
                <div className="space-y-2 border-t pt-4">
                  <p className="flex justify-between">
                    <span>প্রতি টার্ম:</span>
                    <span className="font-semibold">৳{level.term.toLocaleString()}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>মাসিক পরিকল্পনা:</span>
                    <span className="font-semibold">৳{level.monthly.toLocaleString()}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Fees Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">অতিরিক্ত ফি সমূহ</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
              {additionalFees.map((fee) => (
                <div key={fee.name} className="p-6">
                  <h3 className="font-bold text-lg mb-2">{fee.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-1">৳{fee.amount}</p>
                  <p className="text-sm text-gray-600 mb-2">{fee.frequency}</p>
                  <p className="text-sm text-gray-600">{fee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Plans Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">পেমেন্ট পরিকল্পনা</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentPlans.map((plan) => (
              <div key={plan.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    {plan.icon}
                  </div>
                  <h3 className="font-bold text-lg">{plan.title}</h3>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Aid Section */}
        <div className="bg-secondary rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">আর্থিক সহায়তা উপলব্ধ</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            আমরা বিশ্বাস করি যে মানসম্মত শিক্ষা সকল যোগ্য শিক্ষার্থীর জন্য অ্যাক্সেসযোগ্য হওয়া উচিত।
            আমাদের আর্থিক সহায়তা কর্মসূচি আর্থিক প্রয়োজন রয়েছে এমন পরিবারগুলিকে সহায়তা করার জন্য ডিজাইন করা হয়েছে।
          </p>
          <Link 
            href="/admissions/scholarships-and-aid"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            আর্থিক সহায়তা সম্পর্কে আরও জানুন
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">প্রশ্ন আছে?</h2>
          <p className="text-gray-600 mb-6">
            আমাদের আর্থিক দল আপনাকে আমাদের বেতন কাঠামো এবং পেমেন্ট বিকল্পগুলি বুঝতে সাহায্য করার জন্য এখানে রয়েছে।
          </p>
          <Link 
            href="/contact-us/contact-information"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            আর্থিক অফিসের সাথে যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TuitionFeesPage;