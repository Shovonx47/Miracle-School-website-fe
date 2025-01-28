"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

export default function WelcomeSection() {
  const router = useRouter();
  const [legacyText, setLegacyText] = useState('');

  useEffect(() => {
    const fetchLegacyData = async () => {
      try {
        const response = await fetch('https://miracle-school-landing-page-be.vercel.app/api/history/timeline-events');
        const data = await response.json();
        const fullText = data[0].legacyDescription;
        // Get approximately 50% of the text
        const truncatedText = fullText.slice(0, Math.floor(fullText.length / 2)) + '...';
        setLegacyText(truncatedText);
      } catch (error) {
        console.error('Error fetching legacy data:', error);
        // Fallback text in case of error
        setLegacyText('Founded in 1949, Notre Dame College has been a beacon of academic excellence, molding young minds and shaping future leaders through quality education and strong moral values.');
      }
    };

    fetchLegacyData();
  }, []);

  const handleLearnMoreClick = () => {
    router.push("/about-us/history");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Notre Dame College</h2>
            <p className="text-gray-600 mb-6">
              {legacyText}
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Learn More
            </button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/images/Buildings/analog-landscape-city-with-buildings.jpg"
              alt="Notre Dame College Building"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}