"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin, ArrowLeft } from 'lucide-react';

export default function EventPage({ params }) {
  const { eventSlug } = params;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`https://miracle-school-landing-page-be.vercel.app/api/news/${eventSlug}`);
        const data = await response.json();
        
        if (data.success) {
          setEvent(data.news);
        } else {
          throw new Error('Failed to fetch event details');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-gray-600 animate-pulse">Loading event details...</div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
        <div className="text-red-600 text-lg mb-6">Error: {error || 'Event not found'}</div>
        <Link
          href="/news-and-events/upcoming-events"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 bg-white rounded-lg shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4">
        <Link
          href="/news-and-events/upcoming-events"
          className="inline-flex items-center px-4 py-2 my-6 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] mb-8">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight">{event.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
                <CalendarDays className="w-5 h-5 mr-2" />
                {event.date}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div
            className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Need More Information?</h3>
          <p className="text-gray-600 mb-6">Contact our event coordinator for any queries.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}