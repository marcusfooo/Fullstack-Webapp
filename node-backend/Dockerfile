FROM alpine:3.11

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

RUN apk add --update npm
# Install PM2 globally
RUN npm install --global pm2

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app

EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Running the app
CMD [ "pm2-runtime", "npm", "--", "start"  ]