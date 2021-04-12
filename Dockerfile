FROM node:10

COPY Server/controllers /controllers
COPY models /models
COPY package-lock.json /
COPY package.json /
COPY Server/index.js /
COPY Server/routes.js /

RUN npm ci

EXPOSE 80

CMD npm start