'use client';

import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import NoticeTicker from '@/components/NoticeTicker';
import Footer from '@/components/Footer';
import FeedbackButton from '@/components/FeedbackButton';
import SocialFollowSection from '@/components/SocialFollowSection';
import LoadingSpinner from '@/components/LoadingSpinner';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <NoticeTicker />
          <Suspense key={pathname} fallback={<LoadingSpinner />}>
            <main className="min-h-screen">
              {children}
            </main>
          </Suspense>
          <SocialFollowSection />
          <Footer />
          <FeedbackButton />
        </body>
      </html>
    </Provider>
  );
}
