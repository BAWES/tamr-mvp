# Tamr.me MVP

A production-ready Next.js MVP for Tamr.me - a platform that connects requests to human account managers who coordinate workers to get tasks done.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** for styling
- **Discord Webhooks** for form submissions

## Features

- Clean, responsive landing page with hero section
- Example requests showcase
- Request submission form with validation
- Discord webhook integration for notifications
- Environment variable-based configuration (no hardcoded secrets)

## Local Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tamr-mvp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Edit `.env` and add your Discord webhook URL:
   ```
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url-here
   ```

   To get a Discord webhook URL:
   - Go to your Discord server
   - Navigate to Server Settings > Integrations > Webhooks
   - Click "New Webhook" or select an existing one
   - Copy the webhook URL

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tamr-mvp/
├── app/
│   ├── api/
│   │   └── submit-request/
│   │       └── route.ts      # Discord webhook API route
│   ├── globals.css           # Tailwind CSS imports
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── public/
│   └── tamr-logo-dark.svg    # Logo asset
├── .env.example              # Environment variable template
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Deployment to Vercel

### Prerequisites

- A Vercel account ([vercel.com](https://vercel.com))
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Steps

1. **Push your code to Git:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import project to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

3. **Add environment variable:**
   - In the Vercel project settings, go to "Environment Variables"
   - Add `DISCORD_WEBHOOK_URL` with your Discord webhook URL
   - Make sure to add it for all environments (Production, Preview, Development)

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your app
   - Your app will be live at `your-project.vercel.app`

### Environment Variables on Vercel

After deployment, you can update environment variables:
- Go to your project on Vercel
- Navigate to Settings > Environment Variables
- Add or edit `DISCORD_WEBHOOK_URL`
- Redeploy if needed (or wait for automatic redeploy on next push)

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Form Submission Flow

1. User fills out the request form on the landing page
2. Client-side validation checks required fields and email format
3. Form data is sent to `/api/submit-request` API route
4. API route validates data server-side
5. API route sends formatted message to Discord webhook
6. User sees success or error message

## Security Notes

- Never commit `.env` to version control (it's in `.gitignore`)
- Keep your Discord webhook URL secret
- The webhook URL is only used server-side in the API route
- All form validation happens both client-side and server-side

## License

This project is open source. See LICENSE file for details.
