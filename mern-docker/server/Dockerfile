# Use Node.js as the base image
FROM node:20-alpine

# Optional: Create a non-root user for security
# RUN addgroup app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code
COPY . .

# Expose the port your backend listens on
EXPOSE 8000

# Set environment to production
ENV NODE_ENV=production

# Start the backend server
CMD ["npm", "start"]