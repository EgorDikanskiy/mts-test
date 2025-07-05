FROM node:20-alpine

WORKDIR /app

# Установка необходимых зависимостей для сборки нативных модулей
RUN apk add --no-cache python3 make g++

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Копируем данные и скрипты
COPY data/ ./data/
COPY scripts/ ./scripts/
RUN chmod +x ./scripts/init-data.sh

COPY . .

RUN yarn build

EXPOSE 1337

# Запускаем инициализацию и затем Strapi
CMD ["sh", "-c", "./scripts/init-data.sh && yarn start"] 