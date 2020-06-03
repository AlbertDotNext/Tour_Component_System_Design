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

CMD node src/server/database/seed/postgres/attractions.js && node src/server/database/seed/postgres/tours.js && node src/server/database/seed/postgres/ToursAttractions.js && node src/server/index.js
