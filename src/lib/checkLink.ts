export interface CheckResult {
  url: string;
  status: number;
  headers: Record<string, string>;
  responseTime: number;
  error?: string;
  isWorking: boolean;
}

const isValidUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export const checkM3U8Link = async (url: string): Promise<CheckResult> => {
  const startTime = performance.now();
  
  // Validate URL format first
  if (!isValidUrl(url)) {
    return {
      url,
      status: 0,
      headers: {},
      responseTime: 0,
      error: "Invalid URL format. URL must start with http:// or https://",
      isWorking: false
    };
  }
  
  try {
    // Try GET request first (more compatible)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/x-mpegURL',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      mode: 'cors'
    });

    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      url,
      status: response.status,
      headers,
      responseTime: Math.round(performance.now() - startTime),
      isWorking: response.status >= 200 && response.status < 300
    };
  } catch (error) {
    // If GET fails, try HEAD request
    try {
      const headResponse = await fetch(url, {
        method: 'HEAD',
        headers: {
          'Accept': 'application/x-mpegURL',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        mode: 'cors'
      });

      const headers: Record<string, string> = {};
      headResponse.headers.forEach((value, key) => {
        headers[key] = value;
      });

      return {
        url,
        status: headResponse.status,
        headers,
        responseTime: Math.round(performance.now() - startTime),
        isWorking: headResponse.status >= 200 && headResponse.status < 300
      };
    } catch (headError) {
      return {
        url,
        status: 0,
        headers: {},
        responseTime: Math.round(performance.now() - startTime),
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        isWorking: false
      };
    }
  }
};

export const checkMultipleLinks = async (urls: string[]): Promise<CheckResult[]> => {
  const uniqueUrls = Array.from(new Set(urls))
    .map(url => url.trim())
    .filter(url => url); // Remove empty strings
  const results = await Promise.all(uniqueUrls.map(url => checkM3U8Link(url)));
  return results;
};