FROM node:8.10

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "dev"]
