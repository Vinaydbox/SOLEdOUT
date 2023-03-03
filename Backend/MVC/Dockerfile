FROM node:18

#create app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .

EXPOSE 3003

#define command
CMD [ "node", "index.js"]