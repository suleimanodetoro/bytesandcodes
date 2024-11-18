// lib/rate-limiter.ts
// very basic rate limiter, will set up redis upstash later.
interface RateLimit {
    count: number;
    resetTime: number;
  }
  
  const rateLimits = new Map<string, RateLimit>();
  
  export function rateLimit(ip: string) {
    const now = Date.now();
    const limit = 5; // 5 requests
    const windowMs = 3600000; // 1 hour in milliseconds
  
    const currentLimit = rateLimits.get(ip);
  
    // Reset if time window has passed
    if (currentLimit && now > currentLimit.resetTime) {
      rateLimits.delete(ip);
    }
  
    // Get or create limit
    const rateLimit = rateLimits.get(ip) || {
      count: 0,
      resetTime: now + windowMs,
    };
  
    // Increment count
    rateLimit.count++;
    rateLimits.set(ip, rateLimit);
  
    return {
      success: rateLimit.count <= limit,
      remaining: Math.max(0, limit - rateLimit.count),
      reset: rateLimit.resetTime,
    };
  }