"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

const CurriculumLayout = () => {
  // State to track which accordion items are open
  const [openItems, setOpenItems] = useState({});

  // Sample curriculum data in Bangla
  const curriculumData = [
    {
      class: "প্রথম শ্রেণী",
      topics: "গণিত: সংখ্যা পরিচিতি, যোগ-বিয়োগ\nবাংলা: বর্ণমালা, শব্দ গঠন\nইংরেজি: ABC পরিচিতি",
      pdfUrl: "/class1-syllabus.pdf"
    },
    {
      class: "দ্বিতীয় শ্রেণী",
      topics: "গণিত: গুণ-ভাগ, জ্যামিতি\nবাংলা: ছোট গল্প, ব্যাকরণ\nইংরেজি: শব্দ শিক্ষা",
      pdfUrl: "/class2-syllabus.pdf"
    },
    {
      class: "তৃতীয় শ্রেণী",
      topics: "গণিত: ভগ্নাংশ, দশমিক\nবাংলা: রচনা, পত্র লিখন\nবিজ্ঞান: পরিবেশ পরিচিতি",
      pdfUrl: "/class3-syllabus.pdf"
    },
    {
      class: "চতুর্থ শ্রেণী",
      topics: "গণিত: ক্ষেত্রফল, আয়তন\nবাংলা: ব্যাকরণ, সাহিত্য\nবিজ্ঞান: জীবজগৎ",
      pdfUrl: "/class4-syllabus.pdf"
    },
    {
      class: "পঞ্চম শ্রেণী",
      topics: "গণিত: বীজগণিত\nবাংলা: কবিতা, প্রবন্ধ\nবিজ্ঞান: পদার্থবিজ্ঞান",
      pdfUrl: "/class5-syllabus.pdf"
    },
    {
      class: "ষষ্ঠ শ্রেণী",
      topics: "গণিত: সমীকরণ\nবাংলা: সাহিত্য সমালোচনা\nবিজ্ঞান: রসায়ন",
      pdfUrl: "/class6-syllabus.pdf"
    },
    {
      class: "সপ্তম শ্রেণী",
      topics: "গণিত: ত্রিকোণমিতি\nবাংলা: প্রাচীন সাহিত্য\nবিজ্ঞান: জীববিজ্ঞান",
      pdfUrl: "/class7-syllabus.pdf"
    },
    {
      class: "অষ্টম শ্রেণী",
      topics: "গণিত: জ্যামিতি\nবাংলা: আধুনিক সাহিত্য\nবিজ্ঞান: পরিবেশ বিজ্ঞান",
      pdfUrl: "/class8-syllabus.pdf"
    },
    {
      class: "নবম শ্রেণী",
      topics: "গণিত: ক্যালকুলাস\nবাংলা: বাংলা সাহিত্যের ইতিহাস\nবিজ্ঞান: পদার্থ ও রসায়ন",
      pdfUrl: "/class9-syllabus.pdf"
    },
    {
      class: "দশম শ্রেণী",
      topics: "গণিত: উচ্চতর গণিত\nবাংলা: বাংলা সাহিত্যের যুগ বিভাজন\nবিজ্ঞান: জীববিজ্ঞান ও পরিবেশ",
      pdfUrl: "/class10-syllabus.pdf"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleDownload = (pdfUrl, className) => {
    // In a real application, this would trigger the actual PDF download
    console.log(`Downloading syllabus for ${className}`);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">
          পাঠ্যক্রম পরিকল্পনা
        </h1>
        
        <div className="space-y-4">
          {curriculumData.map((item, index) => (
            <div 
              key={index} 
              className="border-2 border-secondary rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <div
                className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold text-primary">
                  {item.class}
                </h2>
                {openItems[index] ? (
                  <ChevronUp className="h-6 w-6 text-primary" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-primary" />
                )}
              </div>
              
              {openItems[index] && (
                <div className="bg-gray-50 p-4 border-t border-secondary">
                  <div className="whitespace-pre-line mb-4 text-gray-700">
                    {item.topics}
                  </div>
                  <button
                    onClick={() => handleDownload(item.pdfUrl, item.class)}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    সিলেবাস ডাউনলোড করুন
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumLayout;