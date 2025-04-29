# Create a minimal image with only the build files
FROM node:20-alpine
 
# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install

# Build a production version
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["yarn", "start"]