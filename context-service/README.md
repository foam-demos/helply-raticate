# Context Service

Aggregates customer context from multiple sources (Stripe, Gong, PostHog, HubSpot, Attio, knowledge bases) to provide the AI agent with full account history. Built with Node.js, TypeScript, Prisma ORM, and Postgres. Implements caching strategies to minimize external API calls.

## Local Development
```bash
npm install
npx prisma generate
npm run dev
```