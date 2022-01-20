# bsale-backend

Esta app se encuentra servida en el siguiente enlace de heroku\

[https://bsale-challenge.herokuapp.com/] 

### Arranque en entorno local

1- Ingresar o posicionar tu terminal en la caperta raíz
2- Ejecutaremos **npm install** para instalar las dependencias de node_modules  \
3- Ejecutamos **npm run dev** para ejecutar el webpack server en [http://localhost:8080] \

## Dependencias

npm install mysql\
npm install mysql2\
npm install sqlite3\
npm install sequelize\
npm install sequelize-cli\
npm install sequelize-auto\

## Configurar Sequelize 

**Traer los modelos desde la BBDD bsale_test con sequelize** 
sequelize-auto -o "./models" -d bsale_test -h mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com -u bsale_test -x bsale_test -e mysql

**Iniciar configuracion de sequelize**
sequelize init

## Swagger

https://www.npmjs.com/package/swagger-ui-express
https://editor.swagger.io/

npm install swagger-ui-express

