FROM node:20-alpine

WORKDIR /app

COPY . .

CMD yarn; yarn dev

EXPOSE 5173