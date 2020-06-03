FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install --production

EXPOSE 80

CMD npm start

COPY . .
