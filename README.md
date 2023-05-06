# Clever Cognition | E-Commerce

A modern e-commerce site built with Next.js 13 and App Router, powered by Shopify.

## Features

- Next.js App Router integration
- SEO optimization using Next.js's Metadata
- React Server Components (RSCs) and Suspense
- Route Handlers for mutations
- Edge runtime support
- New fetching and caching paradigms
- Dynamic OG images
- Styling with Tailwind CSS
- Checkout and payments with Shopify
- Automatic light/dark mode based on system settings

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
