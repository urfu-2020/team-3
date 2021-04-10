FROM node:10

COPY controllers /controllers
COPY models /models
COPY package-lock.json /
COPY package.json /
COPY index.js /
COPY routes.js /

RUN npm ci

EXPOSE 80

CMD npm start