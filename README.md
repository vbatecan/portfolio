# Vince Angelo Batecan's portfolio

The portfolio uses Next.js and Tailwind CSS. Cloudflare Workers serves the static export at [vbatecan.dev](https://vbatecan.dev).

```sh
npm ci
npm run dev
```

Use `npm run preview:cf` to build and preview the static export with Wrangler. Run `npm run deploy:cf` with an authenticated Wrangler session to publish the `out/` directory to the existing `portfolio` Worker.
