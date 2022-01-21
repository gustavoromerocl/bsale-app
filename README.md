## BSALE CHALLENGE 
[https://bsale-challenge.herokuapp.com/out/index.html]
### Introducción

El presente proyecto corresponde a una API RESTful. Su creación tiene como objetivo ser parte de un desafío de selección para formar parte del equipo de desarrolladores de la empresa "bsale". A continuación podrás revisar la documentación de dicho proyecto y además podŕas revisar en detalle las funciones principales en la navegación ubicada a la derecha de este parrafo.

### Contexto 

En primer lugar, se solicita conectar la base de datos entregada a una aplicación backend construida en un framework de elección basado en arquitectura REST, con el fin de servir los datos alojados en la nube de dicha BD. En segundo lugar, se debe construir el cliente/frontend en javascript vanilla para consumir dicha API RESTful. Además, se requiere crear un buscador que retorne las búsquedas filtradas desde el servidor, entre otros requerimientos para simular una tienda virtual.

### Solución

En respuesta a lo solicitado, decidí usar el siguiente stack de desarrollo: Para el backend el framework de node expressJS, para gestionar la base de datos sequelizeJS (ORM). En cuanto a el frontend, lo siguiente: webpack, bootstrap, sass/css, javascript vanilla. En estos momentos nos ubicamos en la capa backend del proyecto, si quieres revisar la documentación que referencia a la capa frontend, te invito a visitar el siguiente enlace:

[https://bsale-client-594e1.web.app/out/index.html]

# **Backend** 

### Entorno de desarrollo (pre-requisitos)
- Node JS v16.13.1
- Mysql v2.18.1

### Stack
- Express v4.16.4
- Sequelize ORM v6.13.0
- Heroku v7.59.1

### API DOC
- Swagger
- jsDoc

### Dependencias

///////////imagen de dependencias

### Instalación local

1- Ingresar o posicionar tu terminal en la caperta raíz del proyecto 
2- Ejecutaremos **npm install** para instalar las dependencias de node_modules  
3- Ejecutamos **npm run dev** para ejecutar el webpack server en [http://localhost:8080] 

### Express y Sequelize ORM

La parte primordial en este desafío según mi percepción fue conectar la base de datos, contruir los modelos para manipular la información con los estándares de encapsulamiento adecuados. Por este motivo decidí trabajar con Express y Sequelize, programar del lado del servidor con javascript y gestionar con un ORM la base de datos. Entonces, lo primero fue crear una app con **express --view=pug myapp**. Esta linea de comando genera un esquema básico de una app servida con Express. 
Traer los modelos de la base de datos existentes fue todo un desafío, pero finalmente usando la api sequelize-auto extraje los modelos con el siguiente comando:

sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]

La línea de comandos anterior da como resultado al carpeta models con los archivos configurados con sequelize, solo hace falta iniciar la configuración con **sequelize init**. Esta ultima instrucción genera la conexión a la base de datos en un archivo index.js dentro de la carpeta models y además genera un objeto JSON para registrar la configuración de la base de datos como se aprecia a continuación:

////////imagen del config.json de sequelize 

Una vez configurada la base de datos, pude empezar a manipular la información mediante los metodos que entrega sequelize a través de sus modelos. Cabe destacar que al trabajar con un ORM tenemos la ventaja de poder trabajar con distintos motores de base de datos, en este caso para la base de datos de prueba configuramos con el motor de sequelize. Para continuar construí los controladores, aquí podemos pareciar un ejemplo del controlador del modelo **product**:

////////Imagen del controlador de product

Una vez configurado el controlador, configuramos la ruta con el objeto router de Express, que nos ofrece la posibilidad de configurar endpoints para nuestra API RESTful. Para esre caso en particular no fue necesario generar la configuración de peticiones POST,PUTS o DELETE ya que solo se requiere de momento hacer peticiones GET. A continuación las rutas del modelo **product**

////Imagen de las rutas del modelo product

Finalmente, debemos importar e ingresar las rutas a la configuración de nuestro servidor en el archivo app.js.

¡Y ya está! tenemos nuestra API RESTful configurada.

### ENDPOINTS

Para entregar una información clara sobre los **endpoints** que maneja la API y, siguiendo el estandar de buenas practicas realicé la documentación con la herramienta swagger, que a su vez nos ofrece los schemas y un entorno de pruebas para validar que las respuestas se esten recibiendo de forma correcta. En el siguiente enlace, puedes revisarlo:

[https://bsale-challenge.herokuapp.com/api-docs/]

### **Testing**


### Feature 1

**Descripción:** Gestionar un request mediante swagger al endpoint **/api/products**

**Resultado esperado:** Retorna un JSON con todos los productos contenido en la BD

**Resultado obtenido:** Retorna un array de objetos JSON con todos los productos

**method: GET**

////////Gift de los endpoints productos


### Feature 2

Descripción: Gestionar un request mediante swagger al endpoint **/api/products/{searchParams}**

Resultado esperado: Retorna un JSON con los productos que en su nombre hagan match con el search params

Parametro ingresado: mr big

Resultado obtenido: 

[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  }
]

method: GET

////////Gift de los endpoints productos

### Deploy

Asegurate de tener instalado el cliente de Heroku antes de ejecutar las instrucciones de deploy:

heroku login
heroku create
git push heroku master

Url del proyecto:[https://bsale-challenge.herokuapp.com/api-docs/]

### **WIKI**

Install Express-generator
[https://expressjs.com/es/starter/generator.html]

Install Sequelize-auto
[https://www.npmjs.com/package/sequelize-auto]

Install Heroku
[https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up]

### Autor

- Gustavo Romero - Desarrollo y documentación
[https://www.gustavoromero.cl/]
### Conclusiones

Durante el desarrollo del backend me sorprendí del portencial de sequelize a la hora de integrar bases de datos existentes, pensé que tardaría más generar los modelos de forma manual, pero por el contrario fue muy sencillo de realizar. También me fue impresindible contar con herramientas como swagger y jsdoc, la curva de aprendizaje no es tan elevada y la ayuda para acortar los tiempos de trabajo es mucha. Definitivamente si hay algo nuevo que me llevo de esta experiencia, son las habilidades para comenzar a documentar de forma correcta mis proyectos personales y de hobby.