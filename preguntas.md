  this.user.updateAt =  moment( new Date(), 'YYYY-MM-DDTHH:mm').format('YYYY-MM-DD HH:mm:ss');

# Debe comprobar los cambios al perder el foco no solo en change.




#  -------------------- RESUELTAS ---------------------------------------------------------------------------------

# Convenciones para nombres:
  Nombre tablas en plural o singular. EN SINGULAR
  Nombre id. idUsuarios o id. = idUsuario
  
# Tipos de datos en SQL
No permite usar columnas con DataType Boolean ¿Cual es el adecuado? Por ejemplo: AprobadaOCM en Solicitudes. = BOL

# Short import
https://fireship.io/snippets/improving-long-relative-paths-imports/
https://escuela.it/cursos/curso-angular-8/clase/modulos-en-angular

# ¿Crear carpetas para controllers, routes.....?
Signin.service.ts es un controller?
NO. Services son los que se usan internamente para llamar funciones, controller son los que hacen llmadas hacia fuera, por ejemplo una API.

# ¿Centralizar todos los mensajes un servicio?
Por ejemplo los de usuario incorrecto, password incorrecto....
SI, es conveniente.

# En user.model.ts
¿Como se hace la asignacion a partir linea 33?
// this.idUser = idUser ? idUser : null; // if( idUser !== undefined) { return idUser} else {return null}
// Si idUser es diferente de undefined coge el argumento que se pasa sino se define a NULL, es para evitar tener campos con undefined.


# Problema con orden declaracion parametros opcionales y obligatorios.
Un parametro obligatorio no puede seguir a uno opcional.
Lo mejor es ponerlos todos como opcionales y controlar por codigo los obligatorios.

# Formato de hora España en time_create y time_update.
Usar momentjs

# Devolver al client, para poder mostrarlos. los posible errores al ejecutar un query en el server.

# signup.component.html
# No consigo poner el focus en email.
Funcionamiento checkbox. 😱

Instalar token y guard
https://codeburst.io/build-a-rest-api-for-node-mysql-2018-jwt-6957bcfc7ac9
https://medium.com/devc-kano/basics-of-authentication-using-passport-and-jwt-with-sequelize-and-mysql-database-748e09d01bab
https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/


# Pasar fecha de updatedAt
