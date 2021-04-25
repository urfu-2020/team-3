FROM node:10

COPY Server /server
COPY package-lock.json /
COPY package.json /

RUN npm ci

EXPOSE 80

CMD npm start