# Deployment Guide

This guide provides step-by-step instructions for deploying the MERN stack application to production.

## Prerequisites

1. **GitHub Account** - For source code and CI/CD
2. **MongoDB Atlas Account** - For database hosting
3. **Backend Hosting** - Choose one:
   - [Render](https://render.com) (Recommended for beginners)
   - [Railway](https://railway.app)
   - [Heroku](https://heroku.com)
4. **Frontend Hosting** - Choose one:
   - [Vercel](https://vercel.com) (Recommended for React apps)
   - [Netlify](https://netlify.com)
   - [GitHub Pages](https://pages.github.com)

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (choose the free tier)
4. Create a database user:
   - Go to Database Access
   - Add New Database User
   - Choose Password authentication
   - Save the username and password
5. Whitelist IP addresses:
   - Go to Network Access
   - Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0) for development
6. Get your connection string:
   - Go to Clusters
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with your database name

## Step 2: Deploy Backend

### Option A: Deploy to Render

1. Sign up at [Render](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `mern-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables:
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render's default)
   - `MONGODB_URI` = Your MongoDB Atlas connection string
   - `JWT_SECRET` = A strong random string
   - `FRONTEND_URL` = Your frontend URL (update after deploying frontend)
6. Click "Create Web Service"
7. Wait for deployment to complete
8. Copy your backend URL (e.g., `https://mern-backend.onrender.com`)

### Option B: Deploy to Railway

1. Sign up at [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add the `backend` directory as a service
5. Add environment variables (same as Render)
6. Railway will auto-detect Node.js and deploy
7. Copy your backend URL

### Option C: Deploy to Heroku

1. Install Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Create app: `heroku create mern-backend`
4. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your-mongodb-uri
   heroku config:set JWT_SECRET=your-jwt-secret
   heroku config:set FRONTEND_URL=your-frontend-url
   ```
5. Deploy: `git push heroku main`
6. Copy your backend URL

## Step 3: Deploy Frontend

### Option A: Deploy to Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variables:
   - `VITE_API_URL` = Your backend URL (e.g., `https://mern-backend.onrender.com`)
6. Click "Deploy"
7. Copy your frontend URL

### Option B: Deploy to Netlify

1. Sign up at [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `frontend/dist`
5. Add environment variables:
   - `VITE_API_URL` = Your backend URL
6. Click "Deploy site"
7. Copy your frontend URL

### Option C: Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `frontend/package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`
4. Enable GitHub Pages in repository settings

## Step 4: Update Environment Variables

After deploying both frontend and backend:

1. **Update Backend**:
   - Set `FRONTEND_URL` to your deployed frontend URL

2. **Update Frontend**:
   - Set `VITE_API_URL` to your deployed backend URL
   - Redeploy the frontend

## Step 5: Set Up CI/CD with GitHub Actions

The CI/CD workflows are already configured in `.github/workflows/`:

1. **Frontend CI** (`frontend-ci.yml`):
   - Runs on push to `main` or `develop`
   - Lints and builds the frontend
   - Tests on Node.js 18 and 20

2. **Backend CI** (`backend-ci.yml`):
   - Runs on push to `main` or `develop`
   - Lints and tests the backend
   - Tests on Node.js 18 and 20

3. **Frontend CD** (`frontend-cd.yml`):
   - Deploys to Vercel/Netlify on push to `main`
   - Requires GitHub secrets:
     - `VITE_API_URL`
     - `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (for Vercel)
     - `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID` (for Netlify)

4. **Backend CD** (`backend-cd.yml`):
   - Deploys to Render/Railway on push to `main`
   - Requires GitHub secrets:
     - `MONGODB_URI_TEST` (for testing)
     - `RENDER_SERVICE_ID`, `RENDER_API_KEY` (for Render)
     - `RAILWAY_TOKEN` (for Railway)

### Setting Up GitHub Secrets

1. Go to your repository on GitHub
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add each secret:
   - `VITE_API_URL`: Your backend URL
   - `MONGODB_URI_TEST`: Test MongoDB URI
   - Platform-specific secrets (Vercel, Netlify, Render, Railway)

## Step 6: Set Up Monitoring

### Health Check Endpoints

- **Backend**: `https://your-backend-url.com/health`
- Use this endpoint for uptime monitoring

### Recommended Monitoring Services

1. **UptimeRobot** (Free):
   - Monitor: `https://your-backend-url.com/health`
   - Interval: 5 minutes
   - Get email alerts on downtime

2. **Sentry** (Error Tracking):
   - Sign up at [Sentry](https://sentry.io)
   - Create projects for frontend and backend
   - Add DSN to environment variables
   - See `monitoring/sentry.config.js` for setup

### Performance Monitoring

- Use browser DevTools for frontend performance
- Monitor API response times in your hosting dashboard
- Set up alerts for high error rates

## Step 7: Custom Domain (Optional)

### Backend Custom Domain

1. **Render**: Go to your service → Settings → Custom Domain
2. **Railway**: Go to your service → Settings → Domains
3. **Heroku**: Use `heroku domains:add yourdomain.com`

### Frontend Custom Domain

1. **Vercel**: Go to your project → Settings → Domains
2. **Netlify**: Go to your site → Domain settings → Custom domains
3. **GitHub Pages**: Go to repository → Settings → Pages → Custom domain

## Troubleshooting

### Backend Issues

- **Connection refused**: Check MongoDB Atlas IP whitelist
- **Environment variables not working**: Restart the service after adding variables
- **Build fails**: Check build logs in hosting dashboard

### Frontend Issues

- **API calls failing**: Check CORS settings and `FRONTEND_URL` in backend
- **Build fails**: Check `VITE_API_URL` is set correctly
- **404 on refresh**: Ensure SPA routing is configured (already done in configs)

### CI/CD Issues

- **Workflows not running**: Check workflow file paths and triggers
- **Deployment fails**: Verify GitHub secrets are set correctly
- **Tests failing**: Check test environment variables

## Maintenance

### Regular Tasks

1. **Weekly**: Check application logs for errors
2. **Monthly**: Review and update dependencies
3. **Quarterly**: Review security updates
4. **As needed**: Database backups (MongoDB Atlas handles this automatically)

### Database Backups

MongoDB Atlas provides automatic backups on paid tiers. For free tier:
- Export data regularly: `mongoexport --uri="your-uri" --collection=users --out=backup.json`
- Store backups securely

### Rollback Procedures

1. **Backend**: Use hosting platform's rollback feature
2. **Frontend**: Redeploy previous version from GitHub
3. **Database**: Restore from MongoDB Atlas backup

## Support

For issues or questions:
- Check hosting platform documentation
- Review GitHub Actions logs
- Check application logs in hosting dashboard
- Consult MongoDB Atlas documentation

