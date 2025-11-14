FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN npm ci
COPY . .
RUN npm run build

FROM base
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
