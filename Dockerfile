FROM node:19-alpine as BUILDER

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn 

COPY . .

RUN yarn build 


FROM nginx:1.21-alpine

EXPOSE 8080

RUN rm -rf /var/cache/apk/*  \
    && rm -rf /usr/share/nginx/html/*

COPY default.conf /etc/nginx/conf.d/

COPY --from=BUILDER /app/build /usr/share/nginx/html