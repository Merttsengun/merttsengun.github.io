FROM nginx:alpine

ARG FORMSPREE_URL

COPY . /usr/share/nginx/html
RUN sed -i "s|BURAYA_FORM_ID|${FORMSPREE_URL}|g" /usr/share/nginx/html/config.js
RUN rm -f /usr/share/nginx/html/nginx.conf /usr/share/nginx/html/Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
