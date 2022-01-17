# bsale-app 

app creada con express generator \
express --view=pug bsale-app

## Arranque del proyecto en entorno local

### `npm install`
Instala las dependencias con nodejs

### `npm start`

Arranca la app development mode.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizar la app en el navegador.

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