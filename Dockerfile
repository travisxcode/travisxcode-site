FROM node:22-alpine AS build

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/out /srv

EXPOSE 3000

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
