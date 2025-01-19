"use client";
import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Flask,
  Monitor,
  BookOpen,
  Dumbbell,
  Coffee,
  HeartPulse,
  Building
} from 'lucide-react';

const FacilitySlide = ({ image, title }) => (
  <div className="relative h-[500px] w-full">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
      <h2 className="text-white text-3xl font-bold">{title}</h2>
    </div>
  </div>
);

const FacilityCard = ({ title, description, images, IconComponent }) => {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className={`text-gray-600 ${showMore ? '' : 'line-clamp-3'}`}>
          {description}
        </p>
        <button 
          onClick={() => setShowMore(!showMore)}
          className="text-primary font-medium mt-2 hover:underline"
        >
          {showMore ? 'Show less' : 'Read more'}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 bg-gray-50">
        {images.map((image, idx) => (
          <img 
            key={idx} 
            src={image} 
            alt={`${title} ${idx + 1}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

const CampusFacilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const facilitySlides = [
    { image: "/api/placeholder/1200/500", title: "State-of-the-Art Science Labs" },
    { image: "/api/placeholder/1200/500", title: "Modern Computer Centers" },
    { image: "/api/placeholder/1200/500", title: "Extensive Library" },
    { image: "/api/placeholder/1200/500", title: "Sports Complex" },
  ];

  const facilities = [
    {
      IconComponent: Flask,
      title: "Science Laboratories",
      description: "Our cutting-edge science laboratories are equipped with the latest research equipment and safety features. The facility includes separate labs for Physics, Chemistry, and Biology, each designed to provide hands-on learning experiences. Students have access to advanced microscopes, analytical instruments, and digital data logging systems.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
    },
    {
      IconComponent: Monitor,
      title: "Computer Labs",
      description: "Multiple computer laboratories featuring the latest hardware and software resources. Each lab is equipped with high-speed internet, development tools, and specialized software for programming, design, and multimedia work. The facilities include dedicated spaces for cybersecurity training and software development.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
    },
    {
      IconComponent: BookOpen,
      title: "Library & Learning Center",
      description: "Our modern library spans three floors and houses over 50,000 books, digital resources, and multimedia materials. Features include quiet study zones, group discussion rooms, and a digital catalog system. The learning center offers computer workstations and access to online journals.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
    },
    {
      IconComponent: Dumbbell,
      title: "Sports Complex",
      description: "Comprehensive sports facilities including an indoor gymnasium, Olympic-sized swimming pool, and outdoor courts. The complex features modern fitness equipment, professional training areas, and spaces for various indoor sports. Outdoor facilities include tennis courts and a football field.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
    },
    {
      IconComponent: Coffee,
      title: "Student Commons",
      description: "A vibrant space designed for student relaxation and social interaction. Includes a modern cafeteria serving diverse cuisine, comfortable seating areas, and recreational zones. The commons features high-speed Wi-Fi, charging stations, and spaces for casual group meetings.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
    },
    {
      IconComponent: HeartPulse,
      title: "Medical Center",
      description: "On-campus medical facility staffed with qualified healthcare professionals. Equipped to handle emergency situations and provide basic healthcare services. Includes consultation rooms, rest areas, and a pharmacy. Regular health checkups and awareness programs are conducted here.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilitySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilitySlides.length) % facilitySlides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Slider */}
      <div className="relative">
        <FacilitySlide {...facilitySlides[currentSlide]} />
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
          {facilitySlides.map((_, idx) => (
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Building className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-gray-800">Campus Facilities</h1>
        </div>
        
        <p className="text-gray-600 max-w-3xl mb-12">
          Our campus is equipped with state-of-the-art facilities designed to provide students 
          with the best possible learning environment. From advanced laboratories to 
          recreational spaces, we ensure that every aspect of campus life supports academic 
          excellence and personal growth.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard 
              key={index} 
              {...facility}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusFacilities;