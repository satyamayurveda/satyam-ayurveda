# Satyam Ayurvedic Clinic Website

Production-ready Next.js 15 website for Satyam Ayurvedic Clinic, Govindpuram, Ghaziabad.

## Features

- Mobile-first clinic website with premium Ayurveda styling
- English/Hindi brand switch in header
- Online consultation booking form with report upload field
- Medicine store with cart, COD inquiry, and Razorpay order endpoint
- Pan India medicine delivery page
- Doctor profile, treatments, testimonials, FAQ, blog, contact, privacy, and terms pages
- SEO metadata, Open Graph tags, schema markup, sitemap, and robots.txt
- CMS-ready content architecture in `src/data/clinic.ts`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.in
NEXT_PUBLIC_WHATSAPP_NUMBER=919899842598
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=xxxxx
```

## Vercel Deployment

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables above.
4. Deploy.

## Scaling Notes

- Replace `src/data/clinic.ts` with Sanity, Strapi, Payload, Contentful, or a database-backed CMS when admin editing is required.
- Replace `console.info` in API routes with email, CRM, database, or Google Sheets integrations.
- Add Razorpay checkout script on the client when moving from demo order creation to full payment capture.
- Replace placeholder testimonials with consent-backed patient stories before launch.
