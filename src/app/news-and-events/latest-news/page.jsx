"use client";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function LatestNewsPage() {
  const router = useRouter();
  
  // In a real app, you might want to fetch this from an API
  const news = [
    {
      date: "March 15, 2024",
      title: "Annual Sports Day",
      description: "Join us for our annual sports day celebration featuring various competitions. Students from all grades will participate in track and field events, team sports, and individual competitions. Parents are welcome to attend and cheer for their children.",
      image: "/images/sports.jpg",
      category: "Sports"
    },
    {
      date: "March 20, 2024",
      title: "Science Fair 2024",
      description: "Students showcase their innovative science projects. This year's theme focuses on sustainable solutions for environmental challenges. Projects will be judged by a panel of expert scientists and educators from leading institutions.",
      image: "/images/science-fair.jpg",
      category: "Academic"
    },
    // ... add more news items here
  ];

  const handleNewsClick = (newsId) => {
    router.push(`/news-and-events/latest-news/${newsId}`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Latest News & Events</h1>
          <p className="text-gray-600">Stay updated with all the happenings at our school</p>
        </motion.div>

        {/* Filter/Category Section */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button className="px-4 py-2 rounded-full bg-red-600 text-white">All</button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-red-50">Academic</button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-red-50">Sports</button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-red-50">Cultural</button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleNewsClick(index)}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-red-600 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-600">{item.date}</span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Read Full Article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-red-50">Previous</button>
          <button className="px-4 py-2 rounded-md bg-red-600 text-white">1</button>
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-red-50">2</button>
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-red-50">3</button>
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-red-50">Next</button>
        </div>
      </div>
    </main>
  );
} 