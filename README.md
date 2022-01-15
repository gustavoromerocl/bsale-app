# bsale-app

app getting started with express generator \
express --view=pug bsale-app

# run scripts to init

### `npm install`
Install dependencies with nodejs

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# dependencies

npm install mysql
npm install mysql2
npm install sqlite3
npm install sequelize
npm install sequelize-cli
npm install sequelize-auto

**Traer los modelos desde la BBDD bsale_test con sequelize** 
sequelize-auto -o "./models" -d bsale_test -h mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com -u bsale_test -x bsale_test -e mysql

**Iniciar configuracion de sequelize**
sequelize init

