FROM node:16.15.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATHCOPY package.json ./
COPY package.json ./
COPY pakcage-lock.json ./
RUN npm install 
COPY . ./
RUN npm run test