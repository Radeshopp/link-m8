FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Expose port
EXPOSE 8080

# Start the application
CMD ["serve", "-s", "dist", "-l", "8080"]
