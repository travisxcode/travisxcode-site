# TravisXcode

Personal site for [Travis Suwanwigo](https://travisxcode.com) — senior software engineer, Toronto.

This is a new repository. It replaces the older SolidJS / Firebase site in [`travisxcode-solid`](https://github.com/travisxcode/travisxcode-solid), which remains as an archive of the 2024 blog.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS v4
- Static export (`output: "export"`)
- Caddy on Railway
- Content-driven case studies in `content/projects`

There is no application backend. Pages are HTML files generated at build time.

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm preview
```

`pnpm preview` serves the static `out/` directory.

## Project structure

```
app/                    Routes, metadata, sitemap, robots
  page.tsx              Homepage
  work/[slug]/page.tsx  Case studies
components/             Layout, homepage sections, case-study UI, media
content/
  site.ts               Name, location, social URLs
  experience.ts         Highlighted roles
  projects/             One file per case study
public/images/          Portrait and future project screenshots
Caddyfile               Static file server for Railway
Dockerfile              Build Next.js, serve `out/` with Caddy
railway.toml            Railway build + health check
```

## Adding a new case study

1. Add a file in `content/projects/`, modeled on `pinterest.ts`.
2. Export it from `content/projects/index.ts` and append it to the `projects` array. Order is homepage order.
3. Put screenshots in `public/images/projects/<slug>/`.
4. Set `hero.src` / gallery `src` to those paths. Leave `src` omitted to keep the placeholder.
5. Run `pnpm build` and open `/work/<slug>/`.

Required fields: `slug`, `title`, `category`, `status`, `year`, `role`, `platform`, `summary`, `description`, `hero`, `sections`.

Do not invent metrics, revenue, or confidential internals. Use a `todo` string on a section when the real copy is not ready.

## Deployment

GitHub → Railway. Push to `main` builds the static site and serves it with Caddy.

### Railway setup

1. Create a GitHub repository named `travisxcode-site` (this project).
2. In Railway, create a project (for example `travisxcode-site`).
3. Add a service from the GitHub repo, branch `main`.
4. Railway should detect `Dockerfile` / `railway.toml`.
5. Generate a Railway domain (`*.up.railway.app`) and confirm `/` and `/work/pinterest/` both load, including a browser refresh on the case-study URL.
6. Confirm `/health` returns `ok`.

The image is a multi-stage build: Node compiles the static export, Caddy serves `/srv`. There is no Node process at runtime.

### Custom domain setup

Primary domain: `https://travisxcode.com`

Railway does **not** publish a static IP. Custom domains use a **CNAME** plus a **TXT** verification record. Railway shows the exact values after you add the domain in the service settings.

GoDaddy DNS does **not** support CNAME flattening / ALIAS at the apex (`travisxcode.com`). Railway documents GoDaddy in the list of providers that cannot point a root domain at a Railway hostname with a CNAME.

Recommended path:

1. Keep GoDaddy as the registrar.
2. Move **DNS only** to Cloudflare (free). Leave the nameservers change until the Railway deploy is confirmed on `*.up.railway.app`.
3. In Railway → service → Public Networking → Custom Domain, add:
   - `travisxcode.com`
   - `www.travisxcode.com`
4. In Cloudflare DNS, add the records Railway displays:
   - CNAME for `@` → Railway hostname (proxy can be on)
   - CNAME for `www` → `@` or the same Railway hostname
   - TXT verification records exactly as shown
5. Cloudflare SSL/TLS mode: **Full** (not Full Strict) if the orange cloud is on.
6. Railway issues Let’s Encrypt automatically after both CNAME and TXT verify.
7. Optional: Cloudflare bulk redirect from `https://www.travisxcode.com` → `https://travisxcode.com`.

Current GoDaddy records (Firebase era — **do not delete until the Railway URL is confirmed working**):

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `199.36.158.100` |
| CNAME | `www` | `travisxcode.com.` |
| TXT | `@` | `hosting-site=travisxcode` |

Nameservers today: `ns41.domaincontrol.com` / `ns42.domaincontrol.com`.

After Railway is live on the custom domain:

- Remove the Firebase A record `199.36.158.100`
- Remove TXT `hosting-site=travisxcode` if Railway does not need it
- Keep any unrelated records (email, etc.)

If you do not want to move DNS to Cloudflare, a weaker fallback is: point `www` at Railway via CNAME, and use GoDaddy forwarding from the apex to `https://www.travisxcode.com`. The canonical site would then be `www`. Prefer Cloudflare so `travisxcode.com` can stay canonical.

### How future changes deploy

1. Edit content or UI locally.
2. `pnpm build` if you want to verify.
3. Commit and push to `main`.
4. Railway rebuilds and publishes. No Firebase upload.

## Design notes

Light editorial system: warm paper ground, ink text, restrained rust accent, Instrument Serif for display, Geist for UI. Motion is CSS only and disabled under `prefers-reduced-motion`.

## Remaining TODO content

- Pinterest: approved screenshots, shareable problem/engineering notes, public outcomes only
- Snowball: App Store screenshots, year, architecture notes, store URL
- Centaures: demo screenshots, public demo URL if it should be linked from the case study
- X / Twitter: omitted until a URL exists in this project
- Experience dates for Booking.com / Agoda and LINE MAN Wongnai: listed as `Previous` until confirmed

## Old repository

`travisxcode-solid` is a SolidJS + Vite SPA with Tailwind, article routes, and Firebase Hosting rewrites. It is worth keeping for the 2024 SwiftUI / TCA writing. It is not a good base for this site: empty social URLs, a non-functional newsletter, blog-first IA, and a manual `dist/` upload. This repo starts clean on purpose.
