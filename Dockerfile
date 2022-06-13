FROM node:16-alpine as builder

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN apk --no-cache add --virtual .builds-deps build-base python3 
RUN npm install

COPY . .

RUN npm run build
FROM node:16-alpine as app

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE ${DEFAULT_APP_PORT}

CMD [ "node","dist/index.js" ]
