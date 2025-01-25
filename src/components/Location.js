import React from 'react';
import { useGetLocationQuery } from '../redux/services/apiService';
import Loading from './Loading';
import Error from './Error';

const Location = () => {
  const { data: location, isLoading, isError } = useGetLocationQuery();

  if (isLoading) return <Loading />;
  if (isError) return <Error message="Failed to load location data" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">{location?.name}</h3>
          <p className="text-gray-600 mb-4">{location?.address}</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={location?.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
