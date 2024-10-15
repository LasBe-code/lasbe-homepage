FROM node:22-alpine AS base

FROM base AS deps
  RUN apk add --no-cache libc6-compat
  WORKDIR /app

  COPY package.json pnpm-lock.yaml ./
  RUN corepack enable pnpm 
  RUN pnpm i --frozen-lockfile

FROM base AS builder
  WORKDIR /app
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .

  RUN echo $TEST
  RUN echo "$TEST"

  ARG FIREBASE_KEY
  ARG FIREBASE_PROJECT
  ARG FIREBASE_MESSAGING
  ARG FIREBASE_APP_ID
  ARG FIREBASE_MEASUREMENT_ID
  ARG TEST

  RUN echo $TEST
  RUN echo "$TEST"

  RUN ls -a
  RUN echo "NEXT_PUBLIC_FIREBASE_KEY=$FIREBASE_KEY" >> .env \
    && echo "NEXT_PUBLIC_FIREBASE_PROJECT=$FIREBASE_PROJECT" >> .env \
    && echo "NEXT_PUBLIC_FIREBASE_MESSAGING=$FIREBASE_MESSAGING" >> .env \
    && echo "NEXT_PUBLIC_FIREBASE_APP_ID=$FIREBASE_APP_ID" >> .env \
    && echo "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=$FIREBASE_MEASUREMENT_ID" >> .env
  RUN ls -a
  RUN corepack enable pnpm
  RUN pnpm run build

FROM base AS runner
  WORKDIR /app

  ENV NODE_ENV=production

  RUN addgroup --system --gid 1001 nodejs
  RUN adduser --system --uid 1001 nextjs

  COPY --from=builder /app/public ./public

  RUN mkdir .next
  RUN chown nextjs:nodejs .next

  COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
  COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

  USER nextjs

  EXPOSE 3000

  ENV PORT=3000

  ENV HOSTNAME="0.0.0.0"
  CMD ["node", "server.js"]