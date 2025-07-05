FROM node:20-alpine

WORKDIR /app

# Установка необходимых зависимостей для сборки нативных модулей
RUN apk add --no-cache python3 make g++

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"] 