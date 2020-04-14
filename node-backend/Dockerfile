FROM node:alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

RUN rm -rf /node_modules

# Install PM2 globally
RUN npm install --global pm2

# Building app
RUN npm install
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Running the app
CMD [ "pm2-runtime", "npm", "--", "start"  ]