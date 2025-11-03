# Portfolio Website Deployment Guide

Your portfolio website is ready to deploy! Choose one of the following methods:

---

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Fastest & Easiest)

**Method A: Using Vercel Dashboard (No CLI needed)**

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy"
   - ✅ Done! Your site will be live in ~2 minutes

**Method B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd "/Users/siddharthholankar/Downloads/Download junk/Portfolio-Website-master"

# Deploy (first time will ask for configuration)
vercel

# Deploy to production
vercel --prod
```

**Your site will be available at**: `https://your-project-name.vercel.app`

---

### Option 2: Netlify (Also Great & Free)

**Method A: Drag & Drop (Simplest)**

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your `dist` folder onto Netlify
4. ✅ Done! Site is live

**Method B: Using Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

**Method C: Connect Git Repository**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Netlify auto-detects Vite configuration
5. Click "Deploy"

---

### Option 3: GitHub Pages (Free GitHub Hosting)

**Automatic Deployment (Already Configured)**

I've already set up GitHub Actions for automatic deployment!

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Click "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"
   - Wait ~2-3 minutes for the first deployment

3. **Your site will be live at**:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**Note**: If using GitHub Pages, update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/', // Add this line with your repo name
})
```

---

## 🔧 Before Deploying

### 1. Test Build Locally
```bash
npm run build
npm run preview
```

### 2. Check Environment Variables
If using EmailJS (for contact form), add these to your deployment platform:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**For Vercel/Netlify**: Add these in the dashboard under "Environment Variables"

---

## 📝 Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check all images load correctly
- [ ] Test on mobile devices
- [ ] Verify LinkedIn and GitHub links work
- [ ] Check resume link opens correctly

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Free custom domain support
- ✅ Automatic deployments from Git
- ✅ Edge network (super fast globally)
- ✅ Free tier is generous

---

## 🆘 Troubleshooting

**Build fails?**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

**Environment variables not working?**
- Make sure they start with `VITE_`
- Restart dev server after adding them
- Check they're added to your deployment platform

**404 errors on page refresh?**
- Vercel/Netlify handle this automatically
- For other platforms, ensure proper redirect rules are set

---

## 🚀 Ready to Deploy?

**Quickest path:**
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Share your new portfolio! 🎉

Need help? Check the [Vercel Documentation](https://vercel.com/docs) or [Netlify Documentation](https://docs.netlify.com)

