# Step 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Run the Vite build command to generate the static files
# (This step will automatically read the .env file if it's present in the build context)
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the static output from the builder stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
