import React from 'react';
import { Facebook, Youtube } from 'lucide-react';

const SocialFollowSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto py-8 px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Follow Us
        </h2>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <button 
            className="p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors"
            onClick={() => window.open('https://facebook.com', '_blank')}
          >
            <Facebook className="w-6 h-6 text-white" />
          </button>
          
          <button 
            className="p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors"
            onClick={() => window.open('https://youtube.com', '_blank')}
          >
            <Youtube className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Banner Image */}
        {/* Banner Image */}
<div className="w-full bg-secondary" style={{ height: '50vh' }}>
  <img 
    src="/assets/images/banners/students-knowing-right-answer.jpg"
    alt="Banner"
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </section>
  );
};

export default SocialFollowSection;
