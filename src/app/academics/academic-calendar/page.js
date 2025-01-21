"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Shirt } from 'lucide-react';

const AcademicCalendar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const calendars = {
    primary: [
      { date: "2025-01-15", day: "Wednesday", event: "First Day of School" },
      { date: "2025-02-14", day: "Friday", event: "Parent-Teacher Meeting" },
      { date: "2025-03-21", day: "Friday", event: "Spring Break Begins" },
      { date: "2025-04-05", day: "Monday", event: "Sports Day" }
    ],
    middle: [
      { date: "2025-01-16", day: "Thursday", event: "Orientation Day" },
      { date: "2025-02-28", day: "Friday", event: "Science Fair" },
      { date: "2025-03-22", day: "Saturday", event: "Sports Day" },
      { date: "2025-04-15", day: "Thursday", event: "Annual Day" }
    ],
    high: [
      { date: "2025-01-17", day: "Friday", event: "Senior Assembly" },
      { date: "2025-02-21", day: "Friday", event: "Career Counseling Day" },
      { date: "2025-03-25", day: "Tuesday", event: "College Fair" },
      { date: "2025-04-20", day: "Monday", event: "Graduation Ceremony" }
    ]
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Academic Calendar 2025</h1>
          <p className="text-gray-600">Comprehensive schedule for all academic levels</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Calendar Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Primary School Accordion */}
            <div className="shadow-lg rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl">
              <button 
                onClick={() => toggleSection('primary')}
                className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary transition-all duration-300"
              >
                <div className="flex-1 text-center">
                  <span className="text-xl font-semibold">Primary School Calendar</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full p-1">
                  {activeSection === 'primary' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {activeSection === 'primary' && (
                <div className="p-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Date</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Day</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Event</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {calendars.primary.map((event, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-sm text-gray-700">{event.date}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-700">{event.day}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-900 font-medium">{event.event}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Middle School Accordion */}
            <div className="shadow-lg rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl">
              <button 
                onClick={() => toggleSection('middle')}
                className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary transition-all duration-300"
              >
                <div className="flex-1 text-center">
                  <span className="text-xl font-semibold">Middle School Calendar</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full p-1">
                  {activeSection === 'middle' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {activeSection === 'middle' && (
                <div className="p-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Date</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Day</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Event</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {calendars.middle.map((event, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-sm text-gray-700">{event.date}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-700">{event.day}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-900 font-medium">{event.event}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* High School Accordion */}
            <div className="shadow-lg rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl">
              <button 
                onClick={() => toggleSection('high')}
                className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary transition-all duration-300"
              >
                <div className="flex-1 text-center">
                  <span className="text-xl font-semibold">High School Calendar</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full p-1">
                  {activeSection === 'high' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {activeSection === 'high' && (
                <div className="p-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Date</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Day</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Event</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {calendars.high.map((event, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-sm text-gray-700">{event.date}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-700">{event.day}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-900 font-medium">{event.event}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Quick Links</h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <BookOpen size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-primary">Code of Conduct</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Shirt size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-primary">Dress Code</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Users size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-primary">Parent Guidelines</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;