# Samrat Restaurant — Premium Restaurant Website

A complete, premium, modern, and fully responsive static restaurant website for **Samrat Restaurant**, located at Choura Rasta in the historic Pink City of Jaipur, Rajasthan, India. Built with **React.js, Vite, Lucide Icons, and Vanilla CSS3**.

Ready for immediate production deployment as a **Render Static Site**.

---

## 🍽️ Restaurant Information (Verified)

- **Name:** Samrat Restaurant
- **Address:** Shop No. 273, Choura Rasta, Pink City, Bapu Bazar, Biseswarji, Jaipur, Rajasthan 302003, India
- **Phone:** [+91 98286 01904](tel:+919828601904)
- **Email:** *samratphotocopiers@gmail.com* (Configured internally in `restaurantData.js` with `isVerified: false`; not published as an official business email until verified)
- **Location:** Choura Rasta, Pink City, Jaipur
- **Cuisine:** Associated with traditional Indian breakfast, Rajasthani food, and local snacks
- **Google Maps:** [Find on Google Maps](https://www.google.com/maps/search/?api=1&query=Samrat+Restaurant+Shop+273+Choura+Rasta+Jaipur)

---

## 🏛️ Website Structure & Features

1. **Royal Rajasthani Design Identity**:
   - Palette: Deep maroon (`#520f18`), warm cream (`#fdfbf7`), muted gold (`#c59b27`), terracotta (`#c85a32`), and dark charcoal (`#181214`).
   - Typography: *Cinzel* & *Playfair Display* for regal headings, *Plus Jakarta Sans* for modern readability.
   - Custom Typographic Logo: **SAMRAT** (*Restaurant • Jaipur*).

2. **Navigation Bar**:
   - Sticky navbar: transparent over hero, solid maroon background when scrolled.
   - Quick notification bar with address and phone number.
   - Full-height responsive mobile drawer with touch scroll and body scroll lock.

3. **Hero Section**:
   - High-definition culinary backdrop with dark overlay.
   - Location badge: *"Choura Rasta, Jaipur"*.
   - Heading: *"Authentic Flavours. Memorable Moments."*
   - Dual CTAs: *"Explore Our Menu"* and *"Find Our Location"*.

4. **About Us**:
   - Verified story celebrating the vibrant surroundings of Jaipur's Pink City.
   - Three key highlights: *Heart of Pink City, Traditional Heritage, Convenient Dining Stop*.

5. **A Taste of Jaipur (Food Showcase)**:
   - 6 culinary categories: Indian Breakfast, Traditional Indian Food, Rajasthani Cuisine, Crispy Snacks & Kachoris, Refreshing Beverages, Traditional Desserts.

6. **Interactive Digital Menu**:
   - Decoupled data layer in `src/data/menuData.js`.
   - Real-time instant search across items and categories.
   - Category filtering (Breakfast Delights, Rajasthani Flavours, Traditional Snacks, Beverages & Chai).
   - Clear transparency notice: *"Our menu is being updated. Please contact the restaurant for current food options."*
   - Clearly tagged demo placeholders (*DEMO PLACEHOLDERS*) that are easy to replace with actual restaurant items later.
   - Compact 2-column mobile card layout to prevent excessive scrolling.

7. **Why Visit Us**:
   - 4 hallmark feature cards: *Convenient Jaipur Location, Breakfast & Food Options, Explore Local Food, Easy Restaurant Contact*.

8. **Photo Gallery & Lightbox**:
   - Responsive multi-column grid with hover captions.
   - Fullscreen modal lightbox with keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`).

9. **Location ("Find Us in Jaipur")**:
   - Verified address card.
   - Embedded Google Maps centered on Choura Rasta, Jaipur.
   - Direct *"Get Directions on Google Maps"* button.

10. **Contact ("Get in Touch")**:
    - Direct Call Now button (`+91 98286 01904`).
    - Unverified email safely excluded from public display.
    - Operating hours verification note.

11. **Footer & Back-to-Top**:
    - Royal maroon footer with quick links, address, and copyright.
    - Smooth floating back-to-top button.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18, v20, or v22)
- [npm](https://www.npmjs.com/)

### Installation & Development
```bash
# 1. Navigate to the project directory
cd C:\restorents\SAMRAT_RESTAURANT

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open your browser at `http://localhost:3001` (or the port Vite displays).

### Production Build
```bash
# Compile and optimize static assets into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to Render (Static Site)

1. **Push to GitHub**:
   ```bash
   cd C:\restorents\SAMRAT_RESTAURANT
   git init
   git add .
   git commit -m "Initial commit: Samrat Restaurant website"
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com/).
   - Click **New +** → **Static Site**.
   - Connect your GitHub repository.
   - Set Build Command: `npm install && npm run build`
   - Set Publish Directory: `dist`
   - Click **Create Static Site**.

---

## 📄 License & Content Attribution
- Content and brand identity prepared for **Samrat Restaurant**, Jaipur, Rajasthan.
- Photography curated via Unsplash royalty-free licensing.
