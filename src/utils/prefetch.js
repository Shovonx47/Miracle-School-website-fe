import { prefetchData } from './apiUtils';

export const prefetchPageData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const urls = [
    `${baseUrl}/api/principal`,
    `${baseUrl}/api/college-stats`,
    // Add other API endpoints as needed
  ];

  await prefetchData(urls);
};
