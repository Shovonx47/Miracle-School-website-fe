"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Calendar, Award } from 'lucide-react';

const EventSlide = ({ image, title, date, description }) => (
  <div className="relative h-96 w-full">
    <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
      <h3 className="text-white text-2xl font-bold">{title}</h3>
      <p className="text-white/90 mt-2">{date}</p>
      <p className="text-white/80 mt-1">{description}</p>
    </div>
  </div>
);

const ClubCard = ({ name, members, description }) => (
  <div className="p-4 border rounded-lg hover:bg-secondary transition-colors cursor-pointer">
    <div className="flex items-center gap-2 mb-2">
      <Users className="h-5 w-5 text-primary" />
      <h4 className="font-semibold text-lg">{name}</h4>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
    <p className="text-sm text-primary mt-2">{members} members</p>
  </div>
);

const ActivitiesLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data
  const events = [
    {
      image: "/assets/images/banners/pexels-goumbik-296301.jpg",
      title: "Annual Sports Day 2024",
      date: "March 15, 2024",
      description: "Students showcasing their athletic abilities in various sports competitions."
    },
    {
      image: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg",
      title: "Science Fair Exhibition",
      date: "February 20, 2024",
      description: "Interactive displays and innovative projects by our young scientists."
    },
    {
      image: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg",
      title: "Cultural Festival",
      date: "January 25, 2024",
      description: "Celebrating diversity through music, dance, and traditional performances."
    }
  ];

  const clubs = [
    {
      name: "Science Club",
      members: 45,
      description: "Exploring scientific concepts through experiments and projects"
    },
    {
      name: "Drama Society",
      members: 30,
      description: "Nurturing theatrical talents and performing arts"
    },
    {
      name: "Eco Club",
      members: 35,
      description: "Promoting environmental awareness and sustainability"
    },
    {
      name: "Debate Club",
      members: 25,
      description: "Developing public speaking and argumentation skills"
    },
    {
      name: "Photography Club",
      members: 20,
      description: "Capturing moments and learning photography techniques"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-4xl font-bold text-primary mb-8">Student Activities</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Event Slider */}
          <div className="relative mb-8">
            <EventSlide {...events[currentSlide]} />
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {events.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>

          {/* Recent Activities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">Upcoming Events</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Inter-School Chess Tournament</span>
                  <span className="text-sm text-gray-500">Next Week</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Annual Art Exhibition</span>
                  <span className="text-sm text-gray-500">In 2 Weeks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">Recent Achievements</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>First Prize - State Science Fair</span>
                  <span className="text-sm text-gray-500">Science Club</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Best Drama Performance</span>
                  <span className="text-sm text-gray-500">Drama Society</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar - Clubs & Societies */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Clubs & Societies</h2>
            <div className="space-y-4">
              {clubs.map((club, index) => (
                <ClubCard key={index} {...club} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesLayout;