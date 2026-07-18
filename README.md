# GetQibla

A simple, private, mobile-first web app for finding the Qibla direction.

## Run locally

```sh
npm install
npm run dev
```

For a production build:

```sh
npm run check
npm test
npm run build
```

## How it works

The app gets the device location, calculates the shortest bearing from that location to the Kaaba, and combines it with the phone's compass heading. The calculation happens in the browser. Coordinates and sensor readings are not sent to a server. The public page also includes a plain-English Qibla guide, facts, and questions and answers for people who want to understand the result.

Compass and location permissions require HTTPS in production. If a browser cannot provide orientation data, the app keeps the compass visible and shows the computed Qibla angle so the user can use a separate physical compass.

## Configuration

Set `PUBLIC_SITE_URL` before deploying so canonical URLs, the sitemap, and robots.txt point to the public domain. The project currently defaults to `https://getqibla.app`.

## Deploy to Cloudflare Workers

The app is configured as a static-assets Worker in `wrangler.jsonc`.

The `public/_headers` file allows this site to request location and compass sensor access from supported browsers.

For a manual deployment:

```sh
npm run deploy
```

For Cloudflare's GitHub integration, import this repository as a Worker and use:

- Build command: `npm run build`
- Deploy command: `npm run deploy:worker`
- Root directory: `/`

Set `PUBLIC_SITE_URL` as a build variable in Cloudflare. The Worker name in the dashboard must be `getqibla` so it matches `wrangler.jsonc`. Every push to the connected production branch will then trigger a build and deployment.

## Contributing

Small, focused contributions are welcome. Keep the interface plain, mobile-first, accessible, and free of tracking. Please add or update tests for calculation changes.

## License

MIT. See [LICENSE](./LICENSE).
