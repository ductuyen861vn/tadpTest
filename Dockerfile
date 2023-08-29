# Start your image with a node base image
FROM --platform=linux/amd64 node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install

# Start the app using serve command
CMD [ "npx", "cypress", "run" ]