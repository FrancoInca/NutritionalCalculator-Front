FROM node:20

WORKDIR /user/src/container

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000