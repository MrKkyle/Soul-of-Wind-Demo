#Installing PHP
FROM php:8.2-fpm
ARG user
ARG uid
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN apt update && apt install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip
RUN apt clean && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd 
RUN docker-php-ext-install mysqli
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

#Copying files
COPY ./ /var/www

WORKDIR /var/www

#Installing composer
RUN composer install

USER $user

CMD ["php", "artisan", "serve"]