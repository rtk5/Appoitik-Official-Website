# Firebase Deployment Instructions

## Prerequisites
1. **Node.js** installed on your machine
2. **Firebase CLI** installed globally
3. **Firebase project** created in Firebase Console

## Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase
```bash
firebase login
```

## Step 3: Initialize Firebase in Your Project
```bash
firebase init hosting
```

When prompted:
- **Select existing project** or create a new one
- **Public directory**: Enter `out` (not `public` or `build`)
- **Configure as SPA**: Yes
- **Set up automatic builds**: No (we'll build manually)
- **Overwrite index.html**: No

## Step 4: Update Firebase Configuration
The `firebase.json` and `.firebaserc` files have been created for you with the correct configuration.

**Important**: Update the project ID in `.firebaserc`:
```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

## Step 5: Build Your Next.js App
```bash
npm run build
```

This will create an `out` directory with your static files (configured in `next.config.js`).

## Step 6: Deploy to Firebase
```bash
firebase deploy
```

## Step 7: Access Your Deployed Site
After deployment, Firebase will provide you with:
- **Hosting URL**: `https://your-project-id.web.app`
- **Custom domain** (if configured): `https://your-domain.com`

## Additional Configuration

### Custom Domain Setup
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Add your domain records as instructed

### Environment Variables
Since this is a static export, environment variables must be set at build time:

1. Create `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_RAZORPAY_KEY=your-razorpay-key
```

2. Rebuild and redeploy:
```bash
npm run build
firebase deploy
```

### Continuous Deployment (Optional)
Set up GitHub Actions for automatic deployment:

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
```

## Troubleshooting

### Common Issues:

1. **404 errors on refresh**: 
   - Ensure `rewrites` are configured in `firebase.json`
   - Check that `public` directory is set to `out`

2. **Build fails**:
   - Run `npm run build` locally first
   - Check for TypeScript errors
   - Ensure all dependencies are installed

3. **Images not loading**:
   - Verify image paths are correct
   - Check that images are in the `public` directory
   - Ensure `next.config.js` has `images: { unoptimized: true }`

4. **Razorpay not working**:
   - Verify Razorpay script is loaded
   - Check environment variables
   - Test in production environment

### Useful Commands:
```bash
# Preview locally before deploying
firebase serve

# Deploy to specific project
firebase deploy --project your-project-id

# Deploy only hosting
firebase deploy --only hosting

# View deployment history
firebase hosting:sites:list
```

## Security Considerations
1. **API Keys**: Only use public API keys in client-side code
2. **Environment Variables**: Prefix with `NEXT_PUBLIC_` for client access
3. **Firebase Rules**: Configure proper security rules if using other Firebase services
4. **HTTPS**: Firebase Hosting automatically provides SSL certificates

## Performance Optimization
1. **Caching**: Headers are configured for optimal caching
2. **Compression**: Firebase automatically compresses files
3. **CDN**: Global CDN distribution included
4. **Image Optimization**: Consider using Next.js Image component with proper configuration

Your Appointik marketing website is now ready for deployment to Firebase Hosting!