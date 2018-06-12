# SpringBootAngularDemo
Demo Project for SpringBoot Angular showing CRUD on Student details
# TODO Spring Angular

A demo of my Spring boot + Angular + Postgresql
## Prerequisites
* JDK8 , Node/NPM, 
## Technologies

* [Spring Boot](http://projects.spring.io/spring-boot/)
* [Maven](http://maven.apache.org/)

* [Spring Data JPA](http://projects.spring.io/spring-data-jpa/)
* [PostgreSQL](http://www.postgresql.org/) (Production, Development)
* [H2 Database Engine](http://www.h2database.com/) (Test)
* [Flyway Database Migration](http://flywaydb.org/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [Angular5](https://angular.io/)
* ...

## Deploy

```
# Build the spring project
student-rest/mvn package
# Build the angular project
student-app/npm install

# or just use docker-compose
# for building and running
docker-compose up
