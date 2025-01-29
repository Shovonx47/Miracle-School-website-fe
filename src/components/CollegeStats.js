"use client";
import { useState, useEffect } from "react";

export default function CollegeStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/college-stats`);
        const data = await response.json();
        if (data.success) {
          setStats(data.data);
        }
      } catch (error) {
        console.error('Error fetching college stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="bg-blue-600 text-white rounded-lg p-8 my-8">Loading...</div>;
  }

  return (
    <div className="bg-blue-600 text-white rounded-lg p-8 my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}