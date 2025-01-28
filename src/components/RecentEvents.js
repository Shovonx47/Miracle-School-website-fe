"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const RecentEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://miracle-school-landing-page-be.vercel.app/api/news?category=Event');
        const data = await response.json();
        // Take the last 3 events from the news array
        setEvents(data.news.slice(-3));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Recent Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            key={event._id}
            href={`/news-and-events/upcoming-events/${encodeURIComponent(event.id)}`}
            className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <span className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/news-and-events/upcoming-events">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            View All Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentEvents;