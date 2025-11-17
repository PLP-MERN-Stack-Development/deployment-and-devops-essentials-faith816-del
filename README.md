# 🚀 MERN Stack Application - Deployment and DevOps

A full-stack MERN (MongoDB, Express.js, React, Node.js) application with complete CI/CD pipelines, production optimizations, and monitoring setup.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring](#monitoring)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This project demonstrates a production-ready MERN stack application with:

- ✅ Production-optimized React frontend with code splitting
- ✅ Secure Express.js backend with proper error handling
- ✅ MongoDB Atlas integration with connection pooling
- ✅ Complete CI/CD pipelines with GitHub Actions
- ✅ Health check endpoints for monitoring
- ✅ Environment-based configuration
- ✅ Security best practices (Helmet, CORS, rate limiting)

## ✨ Features

### Frontend
- React 18 with Vite for fast development and builds
- Code splitting for optimal performance
- React Router for navigation
- React Query for efficient data fetching
- Responsive design
- Environment-based API configuration

### Backend
- Express.js RESTful API
- MongoDB with Mongoose ODM
- JWT authentication
- Input validation with express-validator
- Security middleware (Helmet, CORS, rate limiting)
- Production logging with Morgan
- Health check endpoints
- Error handling middleware

### DevOps
- GitHub Actions for CI/CD
- Automated testing and linting
- Multi-environment support (development, staging, production)
- Deployment configurations for multiple platforms
- Monitoring and health checks

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0
- **Vite** 4.4.9
- **React Router** 6.16.0
- **Axios** 1.5.0
- **React Query** 3.39.3

### Backend
- **Node.js** 18+
- **Express.js** 4.18.2
- **MongoDB** with Mongoose 7.5.0
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Helmet** for security
- **Morgan** for logging

### DevOps
- **GitHub Actions** for CI/CD
- **MongoDB Atlas** for database hosting
- **Render/Railway/Heroku** for backend hosting
- **Vercel/Netlify** for frontend hosting

## 📁 Project Structure

```
.
├── backend/
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── server.js        # Express server
│   ├── package.json
│   └── env.example      # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── utils/       # Utility functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── env.example      # Environment variables template
├── .github/
│   └── workflows/       # GitHub Actions workflows
│       ├── frontend-ci.yml
│       ├── backend-ci.yml
│       ├── frontend-cd.yml
│       └── backend-cd.yml
├── deployment/          # Deployment configurations
│   ├── render.yaml
│   ├── vercel.json
│   ├── netlify.toml
│   └── railway.json
├── monitoring/          # Monitoring configurations
│   ├── sentry.config.js
│   ├── health-check.js
│   └── README.md
├── DEPLOYMENT.md        # Detailed deployment guide
├── Week7-Assignment.md  # Assignment instructions
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- MongoDB Atlas account (or local MongoDB)
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd deployment-and-devops-essentials-faith816-del
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   cp env.example .env
   # Edit .env with your MongoDB URI and other variables
   npm run dev
   ```

3. **Set up the frontend**
   ```bash
   cd frontend
   npm install
   cp env.example .env
   # Edit .env with your backend API URL
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

## 🌐 Deployment

### Deployed Applications

> **Note**: Update these URLs after deploying your application

- **Frontend URL**: [Add your deployed frontend URL here]
- **Backend API URL**: [Add your deployed backend URL here]
- **Health Check**: [Add your backend health check URL here]

### Deployment Status

- ✅ Backend deployed to: [Platform name]
- ✅ Frontend deployed to: [Platform name]
- ✅ CI/CD Pipeline: Active
- ✅ Monitoring: Configured

### Quick Deployment Guide

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

#### Backend Deployment (Render Example)

1. Sign up at [Render](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set root directory to `backend`
5. Add environment variables from `backend/env.example`
6. Deploy!

#### Frontend Deployment (Vercel Example)

1. Sign up at [Vercel](https://vercel.com)
2. Import GitHub repository
3. Set root directory to `frontend`
4. Add environment variable `VITE_API_URL`
5. Deploy!

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

The project includes four GitHub Actions workflows:

1. **Frontend CI** (`.github/workflows/frontend-ci.yml`)
   - Runs on push to `main` or `develop`
   - Lints code
   - Builds the application
   - Tests on Node.js 18 and 20

2. **Backend CI** (`.github/workflows/backend-ci.yml`)
   - Runs on push to `main` or `develop`
   - Lints code
   - Runs tests
   - Verifies server starts correctly

3. **Frontend CD** (`.github/workflows/frontend-cd.yml`)
   - Deploys to Vercel/Netlify on push to `main`
   - Requires GitHub secrets for deployment

4. **Backend CD** (`.github/workflows/backend-cd.yml`)
   - Deploys to Render/Railway on push to `main`
   - Requires GitHub secrets for deployment

### CI/CD Pipeline Screenshots

> **Note**: Add screenshots of your GitHub Actions workflows in action here

![CI Pipeline](./screenshots/ci-pipeline.png)
![CD Pipeline](./screenshots/cd-pipeline.png)

### Setting Up GitHub Secrets

1. Go to repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VITE_API_URL`: Your backend URL
   - `MONGODB_URI_TEST`: Test MongoDB URI
   - Platform-specific secrets (Vercel, Netlify, Render, Railway)

## 📊 Monitoring

### Health Check Endpoints

- **Backend Health**: `GET /health` or `GET /api/health`
  - Returns system status, database connection, uptime, and memory usage

### Monitoring Setup

1. **Uptime Monitoring**
   - Configured with UptimeRobot/Pingdom
   - Monitoring: `https://your-backend-url.com/health`
   - Interval: 5 minutes

2. **Error Tracking**
   - Sentry configuration provided in `monitoring/sentry.config.js`
   - Add `SENTRY_DSN` to environment variables

3. **Performance Monitoring**
   - Backend: Monitor API response times in hosting dashboard
   - Frontend: Use browser DevTools and Lighthouse

See [monitoring/README.md](./monitoring/README.md) for detailed setup instructions.

## 🔐 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=your-super-secret-jwt-key
FRONTEND_URL=https://your-frontend-domain.com
```

See `backend/env.example` for all available variables.

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=https://your-backend-domain.com
```

See `frontend/env.example` for all available variables.

## 📚 API Documentation

### Base URL

```
Development: http://localhost:5000/api
Production: https://your-backend-url.com/api
```

### Endpoints

#### Health Check
- `GET /health` - System health status
- `GET /api/health` - Detailed health check with database status

#### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

#### Items
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

### Example Requests

**Register User**
```bash
curl -X POST https://your-api.com/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

**Create Item**
```bash
curl -X POST https://your-api.com/api/items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name":"Item Name","description":"Item description","price":29.99}'
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check MongoDB Atlas IP whitelist
   - Verify connection string in environment variables
   - Ensure database user has proper permissions

2. **CORS Errors**
   - Verify `FRONTEND_URL` in backend environment variables
   - Check CORS configuration in `server.js`

3. **Build Failures**
   - Check Node.js version (requires 18+)
   - Verify all environment variables are set
   - Check build logs in hosting platform

4. **CI/CD Pipeline Fails**
   - Verify GitHub secrets are set correctly
   - Check workflow file syntax
   - Review GitHub Actions logs

For more troubleshooting tips, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📝 Maintenance Plan

### Regular Tasks

- **Weekly**: Review application logs for errors
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Review and optimize database queries
- **As needed**: Database backups (handled by MongoDB Atlas)

### Rollback Procedures

1. **Backend**: Use hosting platform's rollback feature
2. **Frontend**: Redeploy previous version from GitHub
3. **Database**: Restore from MongoDB Atlas backup

## 📄 License

This project is part of a course assignment.

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Render/Railway/Heroku for backend hosting
- Vercel/Netlify for frontend hosting
- GitHub Actions for CI/CD

## 📞 Support

For issues or questions:
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
- Review hosting platform documentation
- Check GitHub Actions workflow logs
- Consult MongoDB Atlas documentation

---

**Last Updated**: [Add date]
**Status**: ✅ Production Ready
