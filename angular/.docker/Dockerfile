FROM php:5.6.36-apache

COPY . /srv/app
COPY .docker/vhost.config /etc/apache2/sites-available/000-default.conf

WORKDIR /srv/app
