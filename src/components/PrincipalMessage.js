"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PrincipalMessage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [principalData, setPrincipalData] = useState({
    name: "",
    title: "",
    message: "",
    imageUrl: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrincipalData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/principal`);
        const data = await response.json();
        if (data.success) {
          setPrincipalData(data.data);
        }
      } catch (error) {
        console.error('Error fetching principal data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrincipalData();
  }, []);

  if (loading) {
    return <div className="bg-white shadow-lg rounded-lg p-6">Loading...</div>;
  }

  const shortMessage = principalData.message.split('.').slice(0, 2).join('.') + '...';

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Principal's Message</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative h-[300px] w-full">
            <Image
              src={principalData.imageUrl}
              alt="Principal"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="font-bold text-lg">{principalData.name}</h3>
            <p className="text-gray-600">{principalData.title}</p>
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-600 mb-4">
            {isExpanded ? principalData.message : shortMessage}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            {isExpanded ? "Read Less ↑" : "Read More →"}
          </button>
        </div>
      </div>
    </div>
  );
}
