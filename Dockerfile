#Sample Dockerfile for NodeJS Apps

FROM node:20

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT 8080

EXPOSE 8080

CMD [ "node", "server.js" ] 
