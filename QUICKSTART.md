# Quick Start Guide

Get your MERN stack application up and running quickly.

## Prerequisites

- Node.js 18+ and npm 9+
- MongoDB Atlas account (free tier works)
- Git

## 5-Minute Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd deployment-and-devops-essentials-faith816-del

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment Variables

**Backend:**
```bash
cd backend
cp env.example .env
# Edit .env with your MongoDB Atlas URI
```

**Frontend:**
```bash
cd frontend
cp env.example .env
# Edit .env with your backend URL (http://localhost:5000 for local)
```

### 3. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# App runs on http://localhost:3000
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## MongoDB Atlas Setup (2 minutes)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create a cluster (free tier)
4. Create database user (Database Access)
5. Whitelist IP (Network Access → Allow from anywhere for dev)
6. Get connection string (Clusters → Connect → Connect your application)
7. Copy connection string to `backend/.env` as `MONGODB_URI`

## Testing the Application

1. **Health Check**
   ```bash
   curl http://localhost:5000/health
   ```

2. **Register a User**
   - Go to http://localhost:3000/register
   - Fill in the form and submit

3. **Login**
   - Go to http://localhost:3000/login
   - Use your credentials

4. **Create Items**
   - Go to http://localhost:3000/items
   - Add some items

## Next Steps

- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment
- Check [README.md](./README.md) for full documentation
- Review [MAINTENANCE.md](./MAINTENANCE.md) for maintenance procedures

## Common Issues

**MongoDB Connection Error:**
- Check your connection string in `.env`
- Verify IP is whitelisted in MongoDB Atlas
- Ensure database user password is correct

**Port Already in Use:**
- Change `PORT` in `backend/.env`
- Update `VITE_API_URL` in `frontend/.env`

**CORS Errors:**
- Ensure `FRONTEND_URL` in backend `.env` matches frontend URL
- Check CORS configuration in `backend/server.js`

## Need Help?

- Check the [README.md](./README.md) for detailed documentation
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Check application logs for error messages

