"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('https://miracle-school-landing-page-be.vercel.app/api/news?category=Notice');
        const data = await response.json();
        
        if (data.success) {
          // Sort by date in descending order and take the last 3 notices
          const sortedNotices = data.news
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
          setNotices(sortedNotices);
        } else {
          setError('Failed to fetch notices');
        }
      } catch (err) {
        setError('Error fetching notices');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-6">Notice Board</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-b pb-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-1/4 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-6">Notice Board</h2>
        <p className="text-red-500">Failed to load notices</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Notice Board</h2>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice._id} className="border-b pb-4">
            <h3 className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
              {notice.title}
            </h3>
            <p className="text-sm text-gray-500">
              {new Date(notice.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      <Link 
        href="/news-and-events/notices" 
        className="mt-4 text-blue-600 hover:text-blue-800 font-semibold inline-block"
      >
        More Notice →
      </Link>
    </div>
  );
}