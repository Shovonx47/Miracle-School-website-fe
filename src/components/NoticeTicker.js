"use client";

import { FaBullhorn } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function NoticeTicker() {
  const [notices, setNotices] = useState([]);
  
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('https://miracle-school-landing-page-be.vercel.app/api/news?category=Notice');
        const data = await response.json();
        // Get the last 3 notices from the news array
        const lastThreeNotices = data.news.slice(-3).map(notice => notice.title);
        setNotices(lastThreeNotices);
      } catch (error) {
        console.error('Error fetching notices:', error);
        setNotices([]);
      }
    };
    
    fetchNotices();

    // Refresh notices every 5 minutes
    const interval = setInterval(fetchNotices, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center py-2.5">
          <div className="flex items-center font-bold text-red-600 mr-6 shrink-0 gap-2">
            <FaBullhorn className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Latest Notices</span>
          </div>
          <div className="overflow-hidden relative flex-1">
            <style jsx>{`
              @keyframes ticker {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .ticker-container {
                white-space: nowrap;
                display: inline-block;
                animation: ticker 15s linear infinite;
                padding-left: 100%;
              }
              .ticker-container:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="ticker-container">
              {notices.map((notice, index) => (
                <span key={index} className="text-gray-700 font-medium mr-16 text-[15px]">
                  • {notice}
                </span>
              ))}
              {notices.map((notice, index) => (
                <span key={`duplicate-${index}`} className="text-gray-700 font-medium mr-16 text-[15px]">
                  • {notice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}