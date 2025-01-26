import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="relative">
        {/* Primary spinner */}
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        
        {/* Secondary decorative elements for a more polished look */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary opacity-30 rounded-full animate-pulse"></div>
        
        {/* Additional pulsing circle for visual interest */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
