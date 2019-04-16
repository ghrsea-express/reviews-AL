FROM node:11

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm install -g knex

EXPOSE 3001

CMD [ "npm", "start" ]
