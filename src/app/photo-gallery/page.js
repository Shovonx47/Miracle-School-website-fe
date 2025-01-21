'use client';
import { useState } from 'react';
import Link from 'next/link';

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample photo data - replace with your actual data
  const photos = [
    { id: 1, src: "/assets/images/banners/pexels-goumbik-296301.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/assets/images/banners/pexels-rdne-7606209.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/assets/images/banners/pexels-rdne-7606209.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/assets/images/mv/national-cancer-institute-N_aihp118p8-unsplash.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/assets/images/mv/pexels-goumbik-296301.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/api/placeholder/300/200", alt: "Gallery Image 8" },
    { id: 9, src: "/api/placeholder/300/200", alt: "Gallery Image 9" },
    { id: 10, src: "/api/placeholder/300/200", alt: "Gallery Image 10" },
    { id: 11, src: "/api/placeholder/300/200", alt: "Gallery Image 11" },
    { id: 12, src: "/api/placeholder/300/200", alt: "Gallery Image 12" },
  ];

  const photosPerPage = 6; // 3 photos x 2 rows
  const totalPages = Math.ceil(photos.length / photosPerPage);
  
  // Calculate photos for current page
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Pagination controls
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Header - Now centered */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary">Photo Gallery</h1>
        <p className="text-gray-600 mt-2">Explore our collection of beautiful moments</p>
      </div>

      {/* Photo Grid - Smaller cards with 2 rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {currentPhotos.map((photo) => (
          <div 
            key={photo.id} 
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          Previous
        </button>
        
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 rounded-md text-sm ${
              currentPage === index + 1
                ? 'bg-primary text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
        
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;