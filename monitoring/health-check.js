// Health check script for monitoring services
// Can be used with uptime monitoring services like UptimeRobot, Pingdom, etc.

const http = require('http');

const healthCheckUrl = process.env.HEALTH_CHECK_URL || 'http://localhost:5000/health';

const options = {
  timeout: 5000,
};

const request = http.get(healthCheckUrl, options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const health = JSON.parse(data);
      if (health.status === 'OK' && health.database === 'connected') {
        console.log('Health check passed');
        process.exit(0);
      } else {
        console.error('Health check failed:', health);
        process.exit(1);
      }
    } catch (error) {
      console.error('Failed to parse health check response:', error);
      process.exit(1);
    }
  });
});

request.on('error', (error) => {
  console.error('Health check request failed:', error);
  process.exit(1);
});

request.on('timeout', () => {
  console.error('Health check request timed out');
  request.destroy();
  process.exit(1);
});

