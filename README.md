<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
   
## Description

Proyecto Rest desarrollado con [Nest](https://github.com/nestjs/nest) y que se conecta con una base de datos de Mysql generada con docker.

## Installation Mysql Docker
El path del proyecto, para iniciar el servidor ejecutar:
```bash
$ docker-compose up -d
```
Para detener el servidor ejecutar:
```bash
$ docker-compose down
```

## Installation and Running Api Rest
Dentro de la carpeta api
```bash
$ yarn install
```
```bash
$ yarn start
```
Ó ejecutar dentro de la carpeta api
```bash
$ yarn install
```
```bash
$ yarn build
```
Y después
```bash
$ node dist/main.js
```
El puerto donde se ejecutan los servicios es el 3000

## Servicios

```bash
[POST]http://localhost:3000/personas 
- método para crear personas
```
```bash
[GET]http://localhost:3000/personas 
- método para listar personas
```
```bash
[GET]http://localhost:3000/personas/tipo-documento 
- método para listar tipos de documento
```
```bash
[GET]http://localhost:3000/personas/departamantos 
- método para listar los departamentos del Perú.
```
```bash
[GET]http://localhost:3000/personas/:codDepartamento/provincias 
- método para listar las provincias de un departamento.
```
```bash
[GET]http://localhost:3000/personas/:codDepartamento/:codProvincia/distritos 
- método para listar los distritos de una provincia.
```
Para el detalle de cada servicio importar el archivo de postman
```bash
api-personas-docker.postman_collection.json
```

## Creditos

- Author - [Arturo Sanchez](asanchez.sys@gmail.com)


## License

  Nest is [MIT licensed](LICENSE).
