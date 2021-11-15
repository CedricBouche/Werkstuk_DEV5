FROM node:16

WORKDIR /usr/src/index.js

COPY package.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD npm test

