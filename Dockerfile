FROM node:latest

# COPY . /src

# WORKDIR /src

# RUN npm install

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8000

# CMD npm start

# CMD npm run seed

# COPY . .

CMD [ "npm", "start" ]

CMD ["npm", "run", "seed"]
