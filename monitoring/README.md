# Monitoring Setup

This directory contains monitoring configuration and scripts for the MERN stack application.

## Health Check Endpoints

### Backend Health Check
- **Endpoint**: `/api/health` or `/health`
- **Method**: GET
- **Response**: JSON with system status, database connection, uptime, and memory usage

### Frontend Health Check
- Monitor the frontend by checking if it responds to HTTP requests
- Expected status code: 200

## Error Tracking with Sentry

### Setup Instructions

1. **Create a Sentry account** at https://sentry.io
2. **Create a new project** for both frontend and backend
3. **Get your DSN** from the project settings
4. **Add DSN to environment variables**:
   - Backend: `SENTRY_DSN`
   - Frontend: `VITE_SENTRY_DSN`

### Installation

```bash
# Backend
cd backend
npm install @sentry/node

# Frontend
cd frontend
npm install @sentry/react
```

### Integration

See `sentry.config.js` for configuration examples.

## Uptime Monitoring

### Recommended Services

1. **UptimeRobot** (Free tier available)
   - URL: https://uptimerobot.com
   - Monitor: `https://your-backend-domain.com/health`
   - Interval: 5 minutes

2. **Pingdom** (Paid, free trial)
   - URL: https://www.pingdom.com
   - Monitor: `https://your-backend-domain.com/health`

3. **StatusCake** (Free tier available)
   - URL: https://www.statuscake.com
   - Monitor: `https://your-backend-domain.com/health`

### Health Check Script

Use `health-check.js` for custom monitoring:

```bash
node monitoring/health-check.js
```

Set `HEALTH_CHECK_URL` environment variable to your backend URL.

## Performance Monitoring

### Backend Performance

- Monitor API response times
- Track database query performance
- Monitor memory and CPU usage

### Frontend Performance

- Use browser DevTools Performance tab
- Monitor Core Web Vitals (LCP, FID, CLS)
- Use Lighthouse for performance audits

## Logging

### Backend Logging

The backend uses Morgan for HTTP request logging:
- Development: `dev` format
- Production: `combined` format

### Log Aggregation Services

1. **Logtail** (Free tier available)
2. **Papertrail** (Free tier available)
3. **Datadog** (Paid, free trial)

## Alerting

Set up alerts for:
- Health check failures
- High error rates
- Performance degradation
- Resource usage spikes

