#Build from version 8 of node image
FROM node:8

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Building code for production
RUN npm install
# Run the below for production environment when a package-lock.json is available 
# RUN npm ci --only=production

# Copy source code inside the Docker image
COPY . /app

# EXPOSE instruction to have port 3000 mapped by the docker daemon
EXPOSE 3000

# Start the node server
CMD [ "npm", "start" ] 
