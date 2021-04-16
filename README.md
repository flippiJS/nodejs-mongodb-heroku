Aplicación NodeJS + Express + MongoDB con despliegue automático en Heroku.
==============================

## Introducción
El principal objetivo de este repo es poder desplegar de forma automática nuestra aplicación NodeJS con Express y base NoSQL MongoDB en Heroku.

## 1- Forkear proyecto
Como primer paso, forkeamos este proyecto desde el boton ubicado en la parte superior derecha de la pagina del repositorio.

## 2- Subimos nuestro código (opcional si agregan código)
Una vez forkeado, clonamos el repo con `git clone <url del repo>` y agregamos nuestro codigo. 

Luego comiteamos y pusheamos los cambios.

```sh
git add .
git commit -m "first commit"
git push -u origin main
```

## 3- Crear y configurar la App en Heroku

Nos dirigimos a la página de Heroku https://heroku.com/, iniciamos sesión si tenemos cuenta o creamos una.

Heroku al iniciar sesión nos muestra su dashboard, aquí haremos clic en **New** y luego en **Create new app**:

![Heroku1](https://i.ibb.co/MVTSH69/heroku1.png)

En esta sección agregamos el nombre de la app, seleccionamos la región United States y luego clic en botón **Create app**

![Heroku2](https://i.ibb.co/0BJx5gd/Screenshot-at-Apr-09-19-06-30.png)

Ahora vamos a la sección **Deploy** y hacemos clic en la opción de GitHub, la cual nos mostrará nuestro usuario o tendremos que iniciar sesión con GitHub. Después   buscamos el nombre de nuestro repo y aparecerá abajo:

![Heroku3](https://i.ibb.co/9yftS70/Screenshot-at-Apr-09-19-07-13.png)

Seleccionamos el repo y hacemos clic en **Connect**

Una vez hecho esto, elegimos la rama de github que queremos deplegar con nuestra aplicación Heroku, en nuestro caso `main`, y hacemos clic en **Enable Automatic Deploys**. De esta forma, cada vez que se haga una modificación a esta rama, Heroku va actualizar automáticamente la aplicación.

![Heroku4](https://i.ibb.co/d0z1NWv/heroku4.png)

Lo utlimo que deberiamos hacer es clic en el botón **Deploy Branch**. Esto solo se hace una sola vez, luego se hará de forma automática.

![Heroku5](https://i.ibb.co/sVYwVZx/heroku5.png)

Podemos verificar desde GitHub si el depliegue se hizo con exito. 

https://github.com/flippiJS/nodejs-mongodb-heroku/deployments

![Heroku6](https://i.ibb.co/KwK97BX/Screenshot-at-Apr-16-19-28-57.png)

Desde el botón **View deployment** accedemos a la URL de la app desplegada.

https://nodejs-mongodb-heroku.herokuapp.com/

## 4- Crear y configurar la base de datos MongoDB (MongoDB Atlas Online)

Para esto vamos a crear una cuenta en MongoDB Atlas -> https://account.mongodb.com/account/register que nos permite acceder gratuitamente a un servidor MongoDB en la nube. 

Completamos los datos y creamos la cuenta **Sign Up**:

Validamos la cuenta desde el link enviado al correo.

Iniciamos sesión, completamos los datos que nos pide el formulario.

![mongo2](https://i.ibb.co/SKYRsf7/Screenshot-at-Apr-09-17-25-44.png)

Seleccionamos el plan **FREE**

![mongo3](https://i.ibb.co/MGk5S6Z/Screenshot-at-Apr-09-17-26-30.png)

Elegimos un proveedor a elección y la región

![mongo4](https://i.ibb.co/K2yJ3rs/Screenshot-at-Apr-09-17-26-47.png)

Una vez creado, vamos a crear la DB

![mysql3](https://i.ibb.co/4WZYCzh/Screenshot-at-Apr-09-17-31-38.png)

Ahora configurar los datos de conexion a la base de datos, permitimos la conexion desde cualquier IP publica y completamos los valores

Es **MUY IMPORTANTE** copiar esa informacion (usuario y clave).

Una vez creado, presionamos **Connect**

![mysql3](https://i.ibb.co/xDKR97w/Screenshot-at-Apr-16-19-24-03.png)

Continuamos haciendo click en **Connect you application**

![mysql3](https://i.ibb.co/G9j7x4T/Screenshot-at-Apr-16-19-24-17.png)

Seleccionamos la versión de Node y copiamos la URL de conexión

![mysql3](https://i.ibb.co/h7JN2X5/Screenshot-at-Apr-16-19-24-32.png)

Con estos datos nos vamos al dashboard del proyecto en Heroku, en la pestaña **Settings**, la opción **Config Vars**.

Agregamos los siguientes datos Clave -> Valor:

```sh
MONGO_URL='mongodb+srv://127.0.0.1:27017/'(Url de connect de Atlas)
MONGO_DB_NAME='test' (Nombre de DB creada en Atlas)
```

![mongodb-1](https://i.ibb.co/M9k0KTx/Screenshot-at-Apr-09-19-08-54.png)

## Correr localmente

- Acceder por linea de comandos a la carpeta del proyecto y luego ejecutamos:

```sh
cd C:\<ruta-del-repo-clonado>
npm i
npm start
```

- Abrir desde http://localhost:8080/

## Archivo .env localmente

Crear en la raiz del proyecto el archivo `.env` tomando de referencia `.env.example`

Agregamos los siguientes datos Clave -> Valor:

```sh
MONGO_URL='mongodb+srv://127.0.0.1:27017/'(Url de connect de Atlas)
MONGO_DB_NAME='test' (Nombre de DB creada en Atlas)
```

## Ayuda
Cualquier duda o consulta por el canal de slack

### 2021 - UTN FRA
