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
    return <div className="min-h-screen bg-gray-50 p-8">Loading event details...</div>;
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="text-red-600">Error: {error || 'Event not found'}</div>
        <Link 
          href="/news-and-events/upcoming-events"
          className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-gray-700 hover:text-blue-600"
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
      <Link 
        href="/news-and-events/upcoming-events"
        className="inline-flex items-center px-4 py-2 m-4 text-sm font-medium text-gray-700 hover:text-blue-600"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Events
      </Link>

      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <CalendarDays className="w-5 h-5 mr-2" />
                {event.date}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold mb-3">Need More Information?</h3>
          <p className="text-gray-600 mb-4">Contact our event coordinator for any queries.</p>
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}