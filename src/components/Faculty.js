import React from 'react';
import { useGetAllFacultyQuery } from '../redux/services/apiService';
import LoadingSpinner from '@/components/LoadingSpinner';
import Error from './Error';

const Faculty = () => {
  const { data: faculty, isLoading, isError } = useGetAllFacultyQuery();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <Error message="Failed to load faculty data" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Faculty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty?.map((member) => (
          <div key={member._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.designation}</p>
              <p className="text-gray-500 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
