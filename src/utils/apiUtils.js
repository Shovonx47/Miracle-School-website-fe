const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const apiCache = new Map();

export const fetchWithCache = async (url, options = {}) => {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  const cachedData = apiCache.get(cacheKey);

  if (cachedData) {
    const { data, timestamp } = cachedData;
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
    apiCache.delete(cacheKey);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        ...options.headers,
      },
    });
    const data = await response.json();
    
    if (data.success) {
      apiCache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      });
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const prefetchData = async (urls) => {
  return Promise.all(
    urls.map(url => fetchWithCache(url).catch(err => console.error(`Prefetch failed for ${url}:`, err)))
  );
};

export const clearCache = () => {
  apiCache.clear();
};
