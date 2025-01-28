"use client";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function NewsEventsSection() {
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
        
        // Sort by date and get the last 3 items
        const sortedNews = data.news
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        
        setNews(sortedNews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600">Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-600">Error loading news: {error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Latest News & Events
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link
              href={`/news-and-events/latest-news/${item.id}`}
              key={item._id}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="w-full h-48 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-red-600">{item.date}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-3 flex-grow">{item.description}</p>
                  <button className="mt-4 text-red-600 font-medium hover:text-red-700">
                    Read More →
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}