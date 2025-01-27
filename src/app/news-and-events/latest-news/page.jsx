"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LatestNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://miracle-school-landing-page-be.vercel.app/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch news');
        }
        setNews(data.news || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading news: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {news.map((article, index) => (
        <Link href={`/news-and-events/latest-news/${article.id}`} key={article.id}>
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img 
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-red-600">{article.date}</span>
                <span className="text-sm bg-red-50 text-red-600 px-2 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}