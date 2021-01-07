# fota
This application was generated using JHipster 5.6.1, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v5.6.1](https://www.jhipster.tech/documentation-archive/v5.6.1).
# FOTA
Firmware-over-the-air (FOTA) provides firmware download and update service for our vehicles. This repo is the back-end of the FOTA, for more information please check  [this]([https://sfmotors.atlassian.net/wiki/spaces/Cloud/pages/1115685101/UI+Example](https://sfmotors.atlassian.net/wiki/spaces/Cloud/pages/1115685101/UI+Example)) . 
## Development
To start your application in the dev profile, simply run:
For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].
### Using angular-cli
You can also use [Angular CLI][] to generate some custom client code.
For example, the following command:
    ng generate component my-component
will generate few files:
    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts
## Building for production
To optimize the fota application for production, run:
To ensure everything worked, run:
Refer to [Using JHipster in production][] for more details.
This application was generated using JHipster 5.6.1, you can find documentation [here]([https://www.jhipster.tech/documentation-archive/v5.6.1](https://www.jhipster.tech/documentation-archive/v5.6.1))
## Testing
To launch your application's tests, run:
    ./gradlew test
### Other tests
Performance tests are run by [Gatling][] and written in Scala. They're located in [src/test/gatling](src/test/gatling).
To use those tests, you must install Gatling from [https://gatling.io/](https://gatling.io/).
For more information, refer to the [Running tests page][].
### Code quality
Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:
```
docker-compose -f src/main/docker/sonar.yml up -d
```
Then, run a Sonar analysis:
```
./gradlew -Pprod clean test sonarqube
```
For more information, refer to the [Code quality page][].
## Using Docker to simplify development (optional)
You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.
For example, to start a  database in a docker container, run:
    docker-compose -f src/main/docker/.yml up -d
To stop it and remove the container, run:
    docker-compose -f src/main/docker/.yml down
You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:
## Development
To run this locally, make sure your docker is set up correctly. 
Then run:
### Manage Docker as a non-root use
The Docker daemon binds to a Unix socket instead of a TCP port. By default that Unix socket is owned by the user `root` and other users can only access it using `sudo`. The Docker daemon always runs as the `root` user.
    docker-compose -f src/main/docker/app.yml up -d
For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.
### Set up Redis
    docker run --name redis -p 6379:6379 -d redis
### Set up MongoDB
## Continuous Integration (optional)
Make sure change `$user` and `$password` to specific value
To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.
    docker run --name mongo -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=$root -e MONGO_INITDB_ROOT_PASSWORD=$password mongo:3.4.2
[JHipster Homepage and latest documentation]: https://www.jhipster.tech
[JHipster 5.6.1 archive]: https://www.jhipster.tech/documentation-archive/v5.6.1
### Import mock data 
Make sure change `$user` and `$password` to specific value
[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v5.6.1/development/
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v5.6.1/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v5.6.1/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v5.6.1/running-tests/
[Code quality page]: https://www.jhipster.tech/documentation-archive/v5.6.1/code-quality/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v5.6.1/setting-up-ci/
    db dump
       docker cp fota.tar.gz mongo:/
       docker exec -it mongo bash
       tar xvf fota.tar.gz
       mongorestore -h localhost -u root -p $password --authenticationDatabase $user --authenticationMechanism "SCRAM-SHA-1" -d fota /tmp/fota/fota/
[Gatling]: http://gatling.io/
### Run FOTA project 
    ./mvnw
