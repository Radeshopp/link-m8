FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies including devDependencies for build time
RUN npm ci --include=dev

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove node_modules to keep image size down
RUN rm -rf node_modules

# Install only production dependencies
RUN npm ci --omit=dev

# Expose port
EXPOSE 8080

# Set environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

# Start the application
CMD ["npm", "start"]
