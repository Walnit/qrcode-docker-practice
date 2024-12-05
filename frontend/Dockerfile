# Build Site
FROM node:23-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Run Nginx

FROM nginx:latest

COPY --from=builder /app/dist /data/www
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80