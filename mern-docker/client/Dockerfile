# Use Node.js as the base image
FROM node:20-alpine

# Create and use a non-root user for better security
RUN addgroup app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install --silent

# Copy the rest of the application
COPY . .

# Build the React app for production
RUN npm run build

# Install a lightweight HTTP server for serving the static files
RUN npm install -g serve

# Change ownership of the files to the non-root user
USER root
RUN chown -R app:app .
USER app

# Expose the port to be used (adjust if necessary)
EXPOSE 3000

# Serve the production build
CMD ["serve", "-s", "build"]