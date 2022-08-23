FROM nginx:alpine

COPY /dist/front-angular /usr/share/nginx/html

EXPOSE 8080
