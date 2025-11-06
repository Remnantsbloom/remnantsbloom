# Deploying Remnant's Bloom to Vercel

This guide will help you deploy your e-commerce site to Vercel with your custom domain **www.remnantsbloom.com**.

## ⚡ Quick Start (15 minutes)

### Step 1: Sign in to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. On the Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find **"remnantsbloom"** in your repository list
3. Click **"Import"**

### Step 3: Configure Build Settings

Vercel should auto-detect the settings, but verify:

- **Framework Preset:** Other
- **Root Directory:** `./` (leave as default)
- **Build Command:** `pnpm build`
- **Output Directory:** `client/dist`
- **Install Command:** `pnpm install`

### Step 4: Add Environment Variables

Click **"Environment Variables"** and add these required variables:

#### Required Variables:

```
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_random_secret_key_here
VITE_APP_TITLE=Remnant's Bloom
VITE_APP_LOGO=https://your-logo-url.com/logo.png
```

#### How to Get These Values:

**DATABASE_URL:**
- Option 1: Use PlanetScale (free tier)
  1. Go to [planetscale.com](https://planetscale.com)
  2. Create account and new database
  3. Copy the connection string
  
- Option 2: Use Supabase (free tier)
  1. Go to [supabase.com](https://supabase.com)
  2. Create project
  3. Get connection string from Settings → Database

**JWT_SECRET:**
- Generate a random string (at least 32 characters)
- You can use: `openssl rand -base64 32` in terminal
- Or use an online generator: https://generate-secret.vercel.app/32

**VITE_APP_LOGO:**
- Upload your logo to a service like:
  - Cloudinary (free tier)
  - ImgBB (free)
  - Or use any public URL

#### Optional Variables (for Stripe):

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

Get these from [stripe.com/dashboard/apikeys](https://dashboard.stripe.com/apikeys)

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. You'll get a URL like: `remnantsbloom.vercel.app`

### Step 6: Set Up Database

After first deployment, you need to initialize your database:

1. Connect to your database using the connection string
2. Run the schema migrations:
   ```sql
   -- Your database should auto-create tables from the Drizzle schema
   -- If not, you may need to run: pnpm db:push locally first
   ```

### Step 7: Add Custom Domain

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add **"www.remnantsbloom.com"**
4. Vercel will show you DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records Vercel provides:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
7. Wait 5-60 minutes for DNS to propagate

### Step 8: Test Your Site

1. Visit your Vercel URL
2. Test the shopping cart
3. Try adding products
4. Verify all pages work

## 🔧 Troubleshooting

### Build Fails

**Error: "Cannot find module"**
- Make sure all dependencies are in `package.json`
- Check that `pnpm-lock.yaml` is committed to Git

**Error: "Database connection failed"**
- Verify `DATABASE_URL` is correct in environment variables
- Make sure database allows connections from Vercel IPs

### Site Loads But Features Don't Work

**Shopping cart not working:**
- Check browser console for errors
- Verify all environment variables are set

**Images not loading:**
- Check `VITE_APP_LOGO` URL is accessible
- Verify product image URLs are valid

### Custom Domain Not Working

**"Domain not found" error:**
- DNS changes can take up to 48 hours (usually 5-60 minutes)
- Verify DNS records are correct in your registrar
- Use [dnschecker.org](https://dnschecker.org) to check propagation

## 💰 Costs

### Vercel
- **Hobby (Free):** 100GB bandwidth, unlimited deployments
- **Pro ($20/month):** If you exceed free tier limits

### Database
- **PlanetScale Free:** 5GB storage, 1 billion reads/month
- **Supabase Free:** 500MB storage, 2GB bandwidth

### Stripe
- **Free** - Only pay 2.9% + $0.30 per transaction

**Total:** $0/month to start (only transaction fees)

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [PlanetScale Docs](https://planetscale.com/docs)
- [Stripe Documentation](https://stripe.com/docs)

## 🆘 Need Help?

If you encounter issues:

1. Check Vercel deployment logs (in dashboard)
2. Review browser console for errors
3. Verify all environment variables are set correctly
4. Make sure database is accessible

## 🎉 You're Done!

Once deployed, your site will be live at:
- Vercel URL: `https://remnantsbloom.vercel.app`
- Custom domain: `https://www.remnantsbloom.com`

Every time you push to GitHub, Vercel will automatically rebuild and deploy your site!

