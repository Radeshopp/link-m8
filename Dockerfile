FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove node_modules to keep image size down (optional but helps with Coolify)
# They will be reinstalled from node_modules cache in multi-stage if needed

# Expose port
EXPOSE 8080

# Set environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

# Start the application
CMD ["npm", "start"]
