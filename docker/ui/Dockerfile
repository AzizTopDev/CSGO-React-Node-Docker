FROM node:latest AS UIBuilder
WORKDIR /app/ui

COPY ./ui/package.json ./
COPY ./ui/package-lock.json ./
COPY ./ui/yarn.lock ./
COPY ./ui/public ./public
COPY ./ui/src ./src
COPY ./docker/ui/ui.env ./.env

RUN npm install
RUN npm run build

FROM node:latest AS AdminBuilder
WORKDIR /app/admin

COPY ./admin/package.json ./
COPY ./admin/package-lock.json ./
COPY ./admin/yarn.lock ./
COPY ./admin/public ./public
COPY ./admin/src ./src
COPY ./docker/ui/admin.env ./.env

RUN npm install
RUN npm run build

FROM nginx:alpine
RUN apk --no-cache add curl

COPY --from=UIBuilder /app/ui/build /var/www/ui
COPY --from=AdminBuilder /app/admin/build /var/www/admin
COPY ./docker/ui/nginx.conf /etc/nginx/conf.d/default.conf