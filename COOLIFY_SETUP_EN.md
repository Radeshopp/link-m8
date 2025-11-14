# link-m8 Coolify Setup Instructions

## Prerequisites
- Active Coolify account
- Connected GitHub repository (Radeshopp/link-m8)
- Domain or direct IP access

## Environment Variables Setup Guide

### What are Environment Variables?
Environment variables are key-value pairs that configure your application without modifying code. They're essential for production deployments.

### Required Variables for link-m8

| Variable | Value | Purpose |
|----------|-------|---------|
| `NODE_ENV` | `production` | Tells Node.js to run in production mode (optimized performance) |
| `HOST` | `0.0.0.0` | Makes server accessible from all network interfaces (required for Coolify) |
| `PORT` | `8080` | Port where the application will listen |

### How to Add Environment Variables in Coolify

**Method 1: Through Coolify Dashboard**
1. Go to your Application Settings
2. Find the "Environment" or "Environment Variables" section
3. Click "Add Variable" button
4. Enter the variables:
   ```
   Key: NODE_ENV
   Value: production
   ```
5. Click "Add" and repeat for each variable
6. Save all changes
7. Redeploy your application

**Method 2: Using Coolify UI (Typical Flow)**
```
Dashboard → Your Application → Settings → Environment Variables → Add Variable
Key: NODE_ENV | Value: production
Key: HOST | Value: 0.0.0.0
Key: PORT | Value: 8080
→ Save → Redeploy
```

### ⚠️ Important Notes About Environment Variables

- **Do NOT include quotes**: `NODE_ENV=production` (NOT `NODE_ENV="production"`)
- **Spaces matter**: `HOST=0.0.0.0` (no spaces around `=`)
- **Case sensitive**: `NODE_ENV` is different from `node_env`
- **Changes require redeploy**: After adding/changing variables, redeploy the application
- **Secrets**: Never commit sensitive data to GitHub; use Coolify variables instead

### Optional Environment Variables

If needed, you can also add:
```
DEBUG=false           # Disable debug mode
LOG_LEVEL=info       # Set logging level
CACHE_ENABLED=true   # Enable caching
```

## Installation Steps on Coolify

### 1️⃣ Create New Application
```
1. Go to Coolify Dashboard
2. Click "Create Application" or "New Application"
3. Select "GitHub" as source
4. Choose repository: Radeshopp/link-m8
5. Select branch: main
```

### 2️⃣ Build Settings
```
Build Command:        npm run build
Start Command:        npm start
Public Directory:     dist
Port:                 8080
Node Version:         20 (Alpine recommended)
```

### 3️⃣ Environment Variables
Add the following variables in Coolify's Environment Variables section:
```
NODE_ENV=production
HOST=0.0.0.0
PORT=8080
```

**Step-by-step to add Environment Variables in Coolify:**

1. In your application settings, find "Environment Variables" or "Env Variables"
2. Click "Add Environment Variable" or similar button
3. Add each variable one by one:
   - **Key:** `NODE_ENV` | **Value:** `production`
   - **Key:** `HOST` | **Value:** `0.0.0.0`
   - **Key:** `PORT` | **Value:** `8080`
4. Save the changes
5. These will be automatically loaded during build and deployment

### 4️⃣ Server Configuration
✅ **Important**: Make sure:
- Server listens on `0.0.0.0:8080` (not localhost)
- Do not use --no-install-scripts
- Enable caching for node_modules

### 5️⃣ Domain/URL
```
- Add a custom domain if available
- Or use temporary URL: https://your-project.coolify.io
- Ensure HTTPS is enabled
```

## Important Configuration Files

### ✅ `nixpacks.toml` - Pre-configured
Contains:
- [install]: npm ci
- [build]: npm run build
- [start]: npm start
- [env]: NODE_ENV, HOST, PORT

### ✅ `Dockerfile` - Pre-configured
- Multi-stage build
- Node 20 Alpine
- Built-in Express server

### ✅ `server.js` - Production Server
- Serves files from `dist` directory
- Listens on `0.0.0.0:8080`
- Supports SPA routing

## Automatic Process After GitHub Push

1. ✅ Coolify detects changes
2. ✅ Runs `npm ci` (install dependencies)
3. ✅ Runs `npm run build` (Vite build)
4. ✅ Runs `npm start` (Express server)
5. ✅ Application available at provided URL

## Troubleshooting

### ❌ Bad Gateway
**Cause**: Server not listening on 0.0.0.0
**Solution**: Check environment variables (HOST=0.0.0.0, PORT=8080)

### ❌ Build Failed
**Cause**: Issues with package-lock.json
**Solution**: Already fixed - file is updated

### ❌ Command Not Found
**Cause**: npm ci or npm start missing
**Solution**: Verify package.json and files are present

### ❌ Port Already in Use
**Cause**: Port 8080 is in use
**Solution**: Change PORT in Environment Variables (Coolify usually provides 8080)

### ❌ Connection Refused / Port Not Accessible
**Cause**: HOST set to localhost (127.0.0.1) instead of 0.0.0.0
**Solution**: Ensure `HOST=0.0.0.0` in Environment Variables, then redeploy

### ❌ Application Starts But Not Accessible
**Cause**: Environment variables not properly set or not redeployed after changes
**Solution**: 
1. Verify all three variables (NODE_ENV, HOST, PORT) are set correctly
2. Redeploy the application after changing environment variables
3. Wait 30-60 seconds for the deployment to complete
4. Check application logs for error messages

## Local Testing (Before Pushing)

```bash
# Build the project
npm run build

# Run server locally
npm start

# Visit http://localhost:8080
```

## Important Notes

⚠️ **Do NOT modify**:
- `server.js` (listens on 0.0.0.0:8080)
- `package.json` scripts (start, build, etc.)
- `nixpacks.toml` (Coolify configuration)

✅ **Safe to modify**:
- `src/` - Application code
- `public/` - Static files
- `tailwind.config.ts` - Styling
- `vite.config.ts` - Build settings

## After Installation

1. Test application from provided URL
2. Open Developer Console to check for errors
3. Verify files load correctly (CSS, JS)
4. Test project features (LinkChecker, MediaPlayer, etc.)

## Deployment Workflow

```
Local Development
    ↓
Push to GitHub (main branch)
    ↓
Coolify detects changes
    ↓
npm ci (install dependencies)
    ↓
npm run build (build with Vite)
    ↓
npm start (run Express server)
    ↓
Application online ✅
```

## Project Features

- **Link Checker**: Validate IPTV stream URLs
- **Media Player**: Play HLS/M3U8 streams with Hls.js
- **Channel Manager**: Browse and manage IPTV playlists
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Glassmorphism design with smooth animations

## API Integration

The application supports:
- Supabase authentication
- React Query for data fetching
- Real-time stream validation
- M3U playlist parsing

## Performance Tips

- Build process takes ~8-10 seconds
- Final bundle size: ~742KB (minified)
- CSS: ~61KB, JS: ~743KB
- Recommended Node memory: 512MB minimum

## Monitoring

After deployment, check:
- Application logs for errors
- Network tab for failed requests
- Console for JavaScript errors
- Response times for stream URLs

---

### ✨ Summary
The project is fully ready for Coolify deployment!
- ✅ Docker configured
- ✅ Nixpacks configured
- ✅ Custom server included
- ✅ Environment variables set correctly

Simply push changes and create a new deployment in Coolify!

## Support

For issues:
1. Check the troubleshooting section above
2. Review Coolify logs for detailed error messages
3. Verify environment variables are correctly set
4. Ensure package.json and server.js are not modified
