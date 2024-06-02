// Import the function to report web vitals
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

// Function to send metric to an analytics endpoint
const sendToAnalytics = (metric) => {
  console.log(metric);
  // Replace this with your own analytics endpoint
  // Example: fetch('/analytics', { method: 'post', body: JSON.stringify(metric) });
};

// Report each web vital metric
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
getFCP(sendToAnalytics);
getTTFB(sendToAnalytics);
