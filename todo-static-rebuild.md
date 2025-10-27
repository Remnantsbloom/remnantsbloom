# Remnant's Bloom - Static Site Rebuild for GitHub Pages

## Architecture Changes
- [ ] Remove Express backend server
- [ ] Remove tRPC API layer
- [ ] Remove database dependencies
- [ ] Remove Manus authentication system
- [ ] Convert to pure React static site with Vite

## Product Data Migration
- [ ] Export all 32 products from database to JSON file
- [ ] Include all product images (already on S3, keep URLs)
- [ ] Create products.json with all product data
- [ ] Organize product categories in JSON structure

## Shopping Cart Implementation
- [ ] Create client-side cart context using React Context API
- [ ] Store cart data in localStorage
- [ ] Implement add to cart functionality
- [ ] Implement remove from cart functionality
- [ ] Implement update quantity functionality
- [ ] Create cart page with item list
- [ ] Show cart item count in header
- [ ] Persist cart across page refreshes

## Stripe Integration
- [ ] Install Stripe.js library
- [ ] Create Stripe Checkout integration
- [ ] Configure product data for Stripe
- [ ] Implement checkout button
- [ ] Create success page for completed orders
- [ ] Create cancel page for cancelled checkouts
- [ ] Add Stripe publishable key configuration

## Pages Migration
- [ ] Migrate Home page (remove auth dependencies)
- [ ] Migrate Shop page (client-side filtering only)
- [ ] Migrate Product Detail pages
- [ ] Migrate Cart page (new implementation)
- [ ] Migrate About page
- [ ] Migrate FAQ page
- [ ] Migrate Contact page (add form service like Formspree)
- [ ] Migrate Blog page
- [ ] Migrate Privacy Policy page
- [ ] Migrate Terms & Conditions page
- [ ] Migrate Refund Policy page
- [ ] Migrate Shipping Policy page

## Components Migration
- [ ] Update Header component (remove auth)
- [ ] Update Footer component
- [ ] Update product cards
- [ ] Create new cart components
- [ ] Remove authentication-dependent components

## Styling & Assets
- [ ] Keep all existing Tailwind CSS styling
- [ ] Keep all product images (S3 URLs)
- [ ] Keep all lifestyle images
- [ ] Keep logo and branding
- [ ] Maintain color scheme (mint/cream/purple gradients)

## GitHub Pages Configuration
- [ ] Configure Vite for GitHub Pages base path
- [ ] Create GitHub Actions workflow for deployment
- [ ] Set up build process
- [ ] Configure routing for SPA on GitHub Pages
- [ ] Test production build

## Documentation
- [ ] Create README with setup instructions
- [ ] Document Stripe configuration steps
- [ ] Document GitHub Pages deployment process
- [ ] Document custom domain setup (www.remnantsbloom.com)
- [ ] Create environment variables guide

## Testing
- [ ] Test all pages load correctly
- [ ] Test product filtering and search
- [ ] Test shopping cart add/remove/update
- [ ] Test cart persistence (localStorage)
- [ ] Test Stripe checkout flow
- [ ] Test responsive design
- [ ] Test on mobile devices

## Deployment
- [ ] Build production bundle
- [ ] Deploy to GitHub Pages
- [ ] Configure custom domain DNS
- [ ] Test live site
- [ ] Verify Stripe integration works in production

