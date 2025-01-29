"use client";
import { useEffect } from 'react';
// Import existing components
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import PrincipalMessage from '@/components/PrincipalMessage';
import QuickLinks from '@/components/QuickLinks';
import NoticeBoard from '@/components/NoticeBoard';
import CollegeStats from '@/components/CollegeStats';
import RecentEvents from '@/components/RecentEvents';
import Footer from '@/components/Footer';

// Import the new components
import NoticeTicker from '@/components/NoticeTicker';
import WelcomeSection from '@/components/sections/WelcomeSection';
import KeyFeaturesSection from '@/components/sections/KeyFeaturesSection';
import NewsEventsSection from '@/components/sections/NewsEventsSection';

import { prefetchPageData } from '@/utils/prefetch';

export default function Home() {
  useEffect(() => {
    prefetchPageData();
  }, []);

  return (
    <>
      <main className="landing-page">
        {/* Hero slider */}
        <HeroSlider />

        {/* Newly added sections */}
        <WelcomeSection />
        <KeyFeaturesSection />
        <NewsEventsSection />

        {/* Original layout with grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
          {/* Left content: Principal message, college stats, and recent events */}
          <div className="lg:col-span-2">
            <PrincipalMessage />
            <CollegeStats />
            <RecentEvents />
          </div>

          {/* Right content: Quick links and notice board */}
          <div className="space-y-8">
            <QuickLinks />
            <NoticeBoard />
          </div>
        </div>
      </main>
    </>
  );
}
