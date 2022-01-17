# bsale-app 

## Introducción

Para construir lo solicitado, me propuse la siguiente ruta, servir un backend en express y gestionar la base de datos con sequelizeJS (ORM). En cuanto a el cliente, lo siguiente: webpack, bootstrap, sass/css, javascript vanilla. 

## Instrucciones

Por razones de tiempo, el cliente se debe consumir de forma local ya que hay problemas de compatibilidad que corregir entre heroku, express y webpack. Sin embargo la arquitectura cliente-servidor estan desarrolladas para que trabajen de forma independiente según lo solicitado. El backend esta operando correctamente en produccion sirviendo la base de datos entregada en la siguiente uri:\ 
[https://bsale-challenge.herokuapp.com/api/products] \
Dicho esto, continuamos para servir el cliente de manera local, para ello vamos a seguir las siguientes instrucciones:

### Arranque del cliente en entorno local

1- Ingresar o posicionar tu terminal en la caperta **/ Client** \
2- Ejecutaremos **npm install** para instalar las dependencias de node_modules  \
3- Ejecutamos **npm run dev** para ejecutar el webpack server en [http://localhost:3000] \

\ 
\ 
# Backend

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
\
\

# Frontend

## Dependencias

### Webpack

npm install --save-dev webpack webpack-cli webpack-dev-server  html-webpack-plugin \
npm install --save-dev html-loader

**sass**
npm install --save-dev style-loader css-loader sass-loader node-sass \

**bootstrap**
npm install --save jquery popper.js. \
npm install postcss-loader autoprefixer 
npm install precss --save-dev

**production**

npm install webpack-merge
npm install --save-dev mini-css-extract-plugin