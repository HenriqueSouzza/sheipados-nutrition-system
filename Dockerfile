FROM node:20-alpine

WORKDIR /app

COPY . .

# COPY package*.json ./ 

RUN yarn install

EXPOSE 5173

CMD yarn dev
