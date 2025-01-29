export const getApiUrl = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
        // Fallback to production URL if environment variable is not set
        return 'https://miracle-school-landing-page-be.vercel.app';
    }
    return apiUrl;
};
