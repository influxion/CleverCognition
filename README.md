# Clever Cognition | E-Commerce

Welcome to Clever Cognition, a unique e-commerce site that offers a curated collection of specialty puzzles for enthusiasts. Built with Next.js 13 and App Router, and powered by Shopify.

## Features

- Curated selection of high-quality, unique puzzles
- User-friendly navigation with Next.js App Router integration
- Optimized SEO using Next.js Metadata
- Smooth and responsive UI with React Server Components (RSCs) and Suspense
- Secure and efficient Route Handlers for mutations
- Fast load times and improved performance with Edge runtime support
- Adaptive fetching and caching mechanisms for an optimal browsing experience
- Engaging dynamic Open Graph images for social sharing
- Clean, modern design with Tailwind CSS
- Seamless checkout and payment experience through Shopify integration
- Automatic light and dark mode adaptation based on user's system settings

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/influxion/clever-cognition.git
cd clever-cognition
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env file in the root of the project and add the following environment variables:

```bash
SHOPIFY_STORE_DOMAIN=your_shopify_store_domain
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_shopify_storefront_access_token
```

Replace your_shopify_store_domain with your Shopify domain (e.g. your_shopify_store_subdomain.myshopify.com) and your_shopify_storefront_access_token with your public access token.

### 4. Run the development server

```bash
npm run dev
```

Your app should now be running on localhost:3000.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
