FROM node:10

COPY Server /Server
COPY package-lock.json /
COPY package.json /
COPY tsconfig.json /

RUN npm ci

EXPOSE 80

CMD npm start