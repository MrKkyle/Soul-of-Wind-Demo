<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../../public/SoulofWind.ico" />
    <link rel = "stylesheet" type = "text/css" href = "/resources/css/background.css" ></link> 
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Soul of Wind</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>