FROM nginx:alpine

ARG FORMSPREE_URL

COPY . /usr/share/nginx/html
RUN sed -i "s|BURAYA_FORM_ID|${FORMSPREE_URL}|g" /usr/share/nginx/html/config.js

EXPOSE 80
