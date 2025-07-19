This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


# whoami

## Hello world

Hi there my name is luis gonzalez, you have landed on my github for my personal website.


## Cloud Deployment

Deploying this project to the cloud was straightforward and designed for minimal manual intervention.

The goal is to display my projects while enabling seamless updates through a streamlined CI/CD pipeline.

Deployment Steps
	1.	CI/CD Pipeline
	    •	Utilizes AWS CodePipeline to automatically deploy changes pushed to the main branch.
	2.	S3 Hosting
	    •	The pipeline uploads the production build to an S3 bucket configured for static website hosting.
	3.	Domain Configuration (Route 53)
	    •	A custom domain is managed via Amazon Route 53, pointing to the S3-hosted site.
	4.	HTTPS with AWS Certificate Manager
	    •	SSL/TLS certificates are issued and managed using AWS Certificate Manager for secure HTTPS access.
	5.	Global Distribution (CloudFront)
	    •	AWS CloudFront caches the website at edge locations globally, improving load times and availability.

