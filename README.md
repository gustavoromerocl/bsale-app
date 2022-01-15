# bsale-app

app creada con express generator \
express --view=pug bsale-app

# Arranque del proyecto en entorno local

### `npm install`
Instala las dependencias con nodejs

### `npm start`

Arranca la app development mode.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizar la app en el navegador.

# Dependencias

npm install mysql\
npm install mysql2\
npm install sqlite3\
npm install sequelize\
npm install sequelize-cli\
npm install sequelize-auto\

# Configurar Sequelize 

**Traer los modelos desde la BBDD bsale_test con sequelize** 
sequelize-auto -o "./models" -d bsale_test -h mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com -u bsale_test -x bsale_test -e mysql

**Iniciar configuracion de sequelize**
sequelize init

