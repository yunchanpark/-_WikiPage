FROM node:18-alpine AS base

FROM base AS installer

ARG DATABASE_URL

ENV DATABASE_URL ${DATABASE_URL}

RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add pnpm
COPY . .
RUN pnpm i --frozen-lockfile
RUN pnpm build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=installer /app/public ./public
COPY --from=installer --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=installer --chown=nextjs:nodejs /app/.next/standalone ./wiki
COPY --from=installer --chown=nextjs:nodejs /app/.next/static ./wiki/.next/static

USER nextjs

ARG PORT
ARG API_SERVER_URL
ARG DATABASE_URL

ENV DATABASE_URL ${DATABASE_URL}
ENV API_SERVER_URL ${API_SERVER_URL}

ENV PORT ${PORT}
ENV HOSTNAME "0.0.0.0"

EXPOSE ${PORT}

WORKDIR /app/wiki
CMD ["node", "server.js"]