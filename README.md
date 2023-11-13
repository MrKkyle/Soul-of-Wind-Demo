<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

#About
- This application will mostly be used to demonstrate the integration of React.js and Laravel (a PHP Framework)
- I will be using the information about the famous musicians, "Soul of Wind". I hope you enjoy it. It is, however, still under development ~

#Installation for Laravel project + react
- `composer create-project --prefer-dist laravel/laravel PROJECT_NAME --ignore-platform-req=ext-fileinfo`
- Change package.json to include the relevant libraries
- Redirect to the project directory and then install the libraries using `npm install`
- Enter `composer require laravel/ui --ignore-platform-req=ext-fileinfo` in the cmd
- Change the vite.config.js file to include reactRefreash()
- Install jquery: `npm install jquery --legacy-peer-deps`
- Install react route: `npm install react-router-dom --legacy-peer-deps`
- Add workaround to vite.config,js file to allow js files to be used and not only jsx for react.
- Start the servers: npm run dev, php artisan serve --port=8000 separately, both needs to be run

