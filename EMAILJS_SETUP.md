# EmailJS Setup Guide for Portfolio Contact Form

## 📧 Complete Setup Instructions

Follow these steps to enable the contact form with EmailJS:

---

## Step 1: Create EmailJS Account

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up"** (free account - 200 emails/month)
3. Verify your email address

---

## Step 2: Add Email Service

1. **Login to EmailJS Dashboard**: https://dashboard.emailjs.com
2. Click **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Choose your email provider:
   - **Gmail** (Recommended) - Most reliable
   - **Outlook**
   - **Yahoo**
   - Or custom SMTP

### For Gmail Setup:
1. Click **"Gmail"**
2. Click **"Connect Account"**
3. Sign in with your Gmail (siddharthholankar08@gmail.com)
4. Allow EmailJS to send emails on your behalf
5. **Copy the Service ID** (looks like: `service_abc1234`)
   - Save this! You'll need it later

---

## Step 3: Create Email Template

1. Click **"Email Templates"** in sidebar
2. Click **"Create New Template"**
3. Set up your template:

### Template Settings:
**Template Name**: Portfolio Contact Form

**Subject**: 
```
New Portfolio Contact from {{from_name}}
```

**Content (Body)**:
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

### Template Variables (must match exactly):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{to_name}}` - Your name (auto-filled as "Siddharth Holankar")
- `{{message}}` - The message content

4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xyz5678`)

---

## Step 4: Get Public Key

1. Click your **profile icon** (top right)
2. Go to **"Account"** → **"General"**
3. Find **"Public Key"** section
4. **Copy your Public Key** (looks like: `aBcDeFgHiJkL123`)

---

## Step 5: Add Credentials to Project

### Create `.env` file:

1. Open your project in terminal:
```bash
cd "/Users/siddharthholankar/Downloads/Download junk/Portfolio-Website-master"
```

2. Create `.env` file:
```bash
touch .env
```

3. Open `.env` in your editor and add:
```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkL123
```

**⚠️ Important**: Replace the example values with YOUR actual IDs from EmailJS!

---

## Step 6: Update .gitignore

Make sure `.env` is in your `.gitignore` (it should already be there):

```bash
# Add this line if not present
.env
```

This prevents your API keys from being committed to GitHub!

---

## Step 7: Test Locally

1. **Restart your dev server**:
```bash
npm run dev
```

2. **Test the contact form**:
   - Go to http://localhost:5173
   - Scroll to contact section
   - Fill out form
   - Click "Send Message"
   - Check your email!

---

## Step 8: Deploy with Environment Variables

### For Vercel:

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add these three variables:
   ```
   VITE_EMAILJS_SERVICE_ID = your_service_id
   VITE_EMAILJS_TEMPLATE_ID = your_template_id
   VITE_EMAILJS_PUBLIC_KEY = your_public_key
   ```
4. Redeploy your site

### For Netlify:

1. Go to **Site Settings** → **Environment Variables**
2. Add the same three variables
3. Redeploy

---

## 🎯 How It Works Now

Your contact form has **smart fallback**:

1. ✅ **If EmailJS is configured**: Sends email through EmailJS
2. ✅ **If EmailJS fails**: Opens user's email client automatically
3. ✅ **Always works**: Never leaves visitors with no way to contact you

---

## 🔍 Troubleshooting

### "Failed to send message"

**Check:**
1. Are all three env variables set correctly?
2. Did you restart the dev server after adding `.env`?
3. Is your Gmail connected in EmailJS dashboard?
4. Check EmailJS dashboard → Events for error logs

### Test Your Setup:

**In console (browser dev tools):**
```javascript
console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

Should show your IDs (not `undefined`)

### Gmail Security:

If Gmail blocks EmailJS:
1. Go to https://myaccount.google.com/security
2. Enable "Less secure app access" (if prompted)
3. Or use Gmail App Password instead

---

## 📊 EmailJS Free Tier Limits

- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Unlimited website domains

**Upgrade if needed**: $7/month for 1000 emails

---

## 🎉 All Done!

Once setup:
- ✅ Visitors can send you messages directly through the form
- ✅ You receive emails at siddharthholankar08@gmail.com
- ✅ Form has mailto fallback if EmailJS is down
- ✅ Professional, reliable contact system

---

## 📝 Quick Reference

Your EmailJS Dashboard: https://dashboard.emailjs.com
- Check email delivery status
- View sent emails
- Monitor usage
- Update templates

---

## Need Help?

EmailJS Documentation: https://www.emailjs.com/docs/
EmailJS Support: support@emailjs.com

---

**Remember**: Keep your `.env` file secure and never commit it to GitHub!

