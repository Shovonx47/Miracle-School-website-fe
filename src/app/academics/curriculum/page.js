"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

const API_BASE_URL = 'https://miracle-school-landing-page-be.vercel.app';

const CurriculumLayout = () => {
  const [openItems, setOpenItems] = useState({});
  const [curriculumData, setCurriculumData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurriculum = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/curriculum`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'omit'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data || !data.data) {
          throw new Error('Invalid response format');
        }

        setCurriculumData(data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching curriculum:', err);
        setError(err.message || 'Failed to load curriculum data');
        setLoading(false);
      }
    };

    fetchCurriculum();
  }, []);

  const toggleAccordion = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleDownload = async (pdfUrl, className) => {
    try {
      // Ensure the PDF URL is properly formatted
      const fullPdfUrl = pdfUrl.startsWith('http') ? pdfUrl : `${API_BASE_URL}${pdfUrl}`;
      
      const response = await fetch(fullPdfUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf, application/octet-stream',
        },
        credentials: 'omit'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if we received a PDF
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('pdf')) {
        console.warn('Warning: Response may not be a PDF:', contentType);
      }

      const blob = await response.blob();
      if (blob.size === 0) {
        throw new Error('Downloaded file is empty');
      }

      // Create and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${className}-syllabus.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

    } catch (err) {
      console.error('Error downloading PDF:', err);
      alert('PDF ডাউনলোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-red-500">
          <p className="text-xl">ত্রুটি: {error}</p>
          <p className="mt-2">পৃষ্ঠাটি রিফ্রেশ করুন</p>
        </div>
      </div>
    );
  }

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
                <div className="p-4 bg-gray-50 border-t-2 border-secondary">
                  <div className="whitespace-pre-wrap mb-4 text-gray-700">
                    {item.topics}
                  </div>
                  
                  <button
                    onClick={() => handleDownload(item.pdfUrl, item.class)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <Download className="h-5 w-5" />
                    <span>সিলেবাস ডাউনলোড করুন</span>
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