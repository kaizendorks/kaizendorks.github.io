# DEV: Contains only dependencies, code is mapped in at runtime
FROM node:14.5.0-alpine as DEV

LABEL maintainer="https://github.com/kaizendorks"

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm install

CMD ["npm", "run", "dev"]
