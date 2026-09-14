# Inmind marketing

Public marketing / landing site for [Inmind](https://inmind.media).

## Local

```bash
pnpm install
pnpm dev
```

Runs on [http://localhost:3001](http://localhost:3001).

## Build

```bash
pnpm build
```

## Deploy

Connected to Vercel from this repo. Set `NEXT_PUBLIC_SITE_URL` to the production host.

### Analytics (optional)

Scripts load only after the visitor chooses **Accept all** on the cookie banner.

| Variable | Example |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXX` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `inmind.media` |
| `NEXT_PUBLIC_POSTHOG_KEY` | `phc_…` |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://us.i.posthog.com` (optional) |
