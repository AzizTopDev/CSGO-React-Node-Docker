FROM node:latest
WORKDIR /app/api

COPY ./api ./
COPY ./docker/api/.env ./.env

RUN npm install

CMD ["npm", "start"]