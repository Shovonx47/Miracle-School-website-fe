'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="text-red-600 text-center">
      <h2 className="text-2xl font-bold mb-2">Error Loading Data</h2>
      <p>{message}</p>
    </div>
  </div>
);

const Stats = ({ stats }) => (
  <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
    <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat._id} className="text-center">
          <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
          <div className="text-gray-600 mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const TimelineEvent = ({ event }) => (
  <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
    <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
    <p className="text-gray-600">{event.description}</p>
  </div>
);

export default function HistoryPage() {
  const [timelineData, setTimelineData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimelineEvents = async () => {
      try {
        const res = await fetch('https://miracle-school-landing-page-be.vercel.app/api/history/timeline-events');
        if (!res.ok) {
          throw new Error('Failed to fetch timeline events');
        }
        const data = await res.json();
        setTimelineData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTimelineEvents();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;
  if (!timelineData) return null;

  const legacyData = timelineData[0];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src={legacyData.heroImage}
          alt="Historic Notre Dame College"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            {legacyData.heroTitle}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl text-center">
            {legacyData.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <Stats stats={legacyData.stats} />

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {legacyData.legacyTitle}
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p className="leading-relaxed">{legacyData.legacyDescription}</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Our Journey Through Time
        </h2>
        <div className="space-y-8">
          {timelineData.map((event) => (
            <TimelineEvent key={event._id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}