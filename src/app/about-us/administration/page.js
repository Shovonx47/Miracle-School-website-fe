"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Administration() {
  const [governingBody, setGoverningBody] = useState([]);
  const [latestAlbumImages, setLatestAlbumImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdministrationData = async () => {
      try {
        const response = await fetch('https://miracle-school-landing-page-be.vercel.app/api/about-us/administration');
        if (!response.ok) {
          throw new Error('Failed to fetch administration data');
        }
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || 'Failed to fetch administration data');
        }
        setGoverningBody(data.data.governingBody || []);
        setLatestAlbumImages(data.data.albumImages || []);
      } catch (error) {
        console.error('Error fetching administration data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdministrationData();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === latestAlbumImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [latestAlbumImages]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Administration
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {governingBody.map((member, index) => (
            <div key={member._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Sections Container */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
            <div className="text-gray-600">
              <p className="font-semibold text-lg mb-2">
                Birshreshtha Noor Mohammad Public College
              </p>
              <p>Peelkhana, Dhaka 1205, Bangladesh</p>
              <p className="mt-2">
                <span className="font-medium">Phone:</span> +88-02-58613870 (Direct)
              </p>
              <p>
                <span className="font-medium">Email:</span> info@noormohammadcollege.ac.bd
              </p>
            </div>
          </div>

          {/* Latest Album Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Album</h2>
            <div className="relative h-64 w-full">
              {latestAlbumImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {latestAlbumImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}