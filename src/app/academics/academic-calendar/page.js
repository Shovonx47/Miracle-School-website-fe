"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Shirt } from 'lucide-react';
import axios from 'axios';

const AcademicCalendar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/academic-calendar`);
        const formattedData = data.data.reduce((acc, item) => {
          acc[item.section] = item.events;
          return acc;
        }, {});
        setCalendarData(formattedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load calendar data');
        setLoading(false);
      }
    };

    fetchCalendarData();
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-primary">Loading calendar data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const sections = [
    { id: 'primary', title: 'Primary School Calendar' },
    { id: 'middle', title: 'Middle School Calendar' },
    { id: 'high', title: 'High School Calendar' }
  ];

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
            {sections.map(({ id, title }) => (
              <div key={id} className="shadow-lg rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl">
                <button 
                  onClick={() => toggleSection(id)}
                  className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary transition-all duration-300"
                >
                  <div className="flex-1 text-center">
                    <span className="text-xl font-semibold">{title}</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-full p-1">
                    {activeSection === id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>
                
                {activeSection === id && calendarData[id] && (
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
                        {calendarData[id].map((event, index) => (
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
            ))}
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