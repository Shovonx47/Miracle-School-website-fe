import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="text-red-500 text-center">
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Error;
