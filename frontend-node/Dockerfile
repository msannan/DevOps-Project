FROM node:10-alpine

LABEL maintainer="Muhammad Sannan <sannan_1@hotmail.com>"

# Create app directory
WORKDIR /app

EXPOSE 8080

COPY package*.json ./

RUN npm install

COPY server.js ./

RUN apk add curl 

CMD [ "npm", "start" ]