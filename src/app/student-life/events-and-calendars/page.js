"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const EventsCalendarPage = () => {
  // Previous banner images and events data remain the same
  const bannerImages = [
    {
      id: 1,
      src: "/assets/images/facilities/pexels-abdel-rahman-abu-baker-958112-1920152.jpg",
      alt: "ক্রীড়া দিবস ২০২৪",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      date: "১৫ মার্চ, ২০২৪"
    },
    {
      id: 2,
      src: "/assets/images/facilities/pexels-kobeboy-1516440.jpg",
      alt: "অভিভাবক-শিক্ষক সভা",
      title: "অভিভাবক-শিক্ষক সম্মেলন",
      date: "২০ ফেব্রুয়ারি, ২০২৪"
    },
    {
      id: 3,
      src: "/assets/images/facilities/pexels-mary-taylor-5896836.jpg",
      alt: "আপনার বাবাকে স্কুলে আনুন",
      title: "বাবার দিন বিশেষ",
      date: "১৬ জুন, ২০২৪"
    }
  ];

  const eventCategories = [
    {
      id: 1,
      month: "জানুয়ারি - মার্চ",
      events: [
        {
          title: "নববর্ষ উদযাপন",
          date: "৫ জানুয়ারি, ২০২৪",
          description: "নতুন শিক্ষাবর্ষের শুরুতে স্বাগত অনুষ্ঠান এবং সাংস্কৃতিক পরিবেশনা।",
          time: "সকাল ৯:০০ - দুপুর ১২:০০",
          venue: "স্কুল অডিটোরিয়াম"
        },
        {
          title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
          date: "১৫ মার্চ, ২০২৪",
          description: "অ্যাথলেটিক প্রতিযোগিতা, দলীয় খেলাধুলা এবং ট্র্যাক ইভেন্টস সহ একটি পূর্ণ দিন।",
          time: "সকাল ৮:০০ - বিকেল ৪:০০",
          venue: "স্কুল মাঠ"
        }
      ]
    },
    {
      id: 2,
      month: "এপ্রিল - জুন",
      events: [
        {
          title: "আপনার বাবাকে স্কুলে আনুন দিবস",
          date: "১৬ জুন, ২০২৪",
          description: "বাবারা শ্রেণীকক্ষের কার্যক্রম এবং বিশেষ কর্মশালায় অংশগ্রহণ করবেন এমন একটি বিশেষ দিন।",
          time: "সকাল ১০:০০ - দুপুর ২:০০",
          venue: "সংশ্লিষ্ট শ্রেণীকক্ষ"
        }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section - Now centered */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">স্কুল ইভেন্ট ও ক্যালেন্ডার</h1>
          <p className="mt-2 text-lg">সারা বছর জুড়ে আমাদের স্কুলের সকল কার্যক্রম সম্পর্কে আপডেট থাকুন</p>
        </div>
      </div>

      {/* Banner Slider */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerImages.map((image) => (
            <div key={image.id} className="min-w-full h-full relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                <h3 className="text-xl font-bold">{image.title}</h3>
                <p>{image.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Events Accordion - Section heading centered */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">শিক্ষাবর্ষ ক্যালেন্ডার ২০২৪</h2>
        
        <div className="space-y-4">
          {eventCategories.map((category) => (
            <div key={category.id} className="border rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full flex justify-between items-center p-4 bg-secondary hover:bg-opacity-80 transition-colors"
                onClick={() => toggleAccordion(category.id)}
              >
                <h3 className="text-xl font-semibold w-full text-center pr-8">{category.month}</h3>
                <div className="absolute right-4">
                  {openAccordion === category.id ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>
              
              {openAccordion === category.id && (
                <div className="p-4 bg-white">
                  {category.events.map((event, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <h4 className="text-lg font-semibold text-primary text-center">{event.title}</h4>
                      <div className="mt-2 space-y-2 text-gray-600">
                        <p className="text-center"><strong>তারিখ:</strong> {event.date}</p>
                        <p className="text-center"><strong>সময়:</strong> {event.time}</p>
                        <p className="text-center"><strong>স্থান:</strong> {event.venue}</p>
                        <p className="text-center">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCalendarPage;