


# Ideas desde el curso Angular 8 de EscuelaIT. https://escuela.it/cursos/curso-angular-8/clase/autenticacion-de-usuarios-y-seguridad-en-angular
Auth:
  Minuto 08:10 Uso de Modulos y short import en tsconfig.json. Hay que reiniciar VS Code.
  Usa angularfire2
  Minuto 21:35 uso de environment.
  Crear SignOut.
  Minuto 29:00 hasSession.
  Minuto 33:15 formulario de registro.
  Minuto 40:22 Button .
  Minuto 51:00 IsValidPassword.
  Minuto 01:00:00 Controlar errores.
  Minuto 01.06:00 Una vez registrado ir a signin.
  Minuto 01:10:30 Form signin.
  Minuto 01:16:00 LogOut.
  Minuto 01:20:10 Guard.
  Minuto 01:48.00 Upload ficheros.
  Minuto 02:00:00 Formularios como stepper o wizard.


# https://escuela.it/cursos/curso-angular-8/clase/validacion-asincrona-y-programacion-reactiva
  Minuto 00:04:00 Validaciones asincronas a traves de una API. Async validator.
  Minuto 00:18:000 if abreviado. return res ? false :  true;
  Minuto 00:35:25 Tablas con Angular-Material.
  Minuto 01:07:00 Programación reactiva. Genera componentes dentro de un modulo.
  Minuto 01:11:00 Boton con contador MatBadge de Material. Carro de compra.
  Minuto 01:44:00 Unsuscribe observable.
  Minuto 01:49:15 Async pipe para unsuscribe automaticamente un observable.

# Clase 10 https://escuela.it/cursos/curso-angular-8/clase/aplicaciones-web-progressivas-con-angular
  Minuto 00:02:26 Evitar doble subscribe.

# Clase 11 https://escuela.it/cursos/curso-angular-8/clase/compilacion-de-alto-nivel-y-despliegue-final

# Autentificación basada en Nodejs y Mysql, Aplicación Completa (Login, Registro, CRUD, ES6+ y Más ). •Diciembre 2018.
Codigo: Fazt-nodejs-mysql-links.
https://www.youtube.com/watch?v=qJ5R9WTW0_E

Minuto 06:47 
Instala express, express-handlebars, express-session, express-mysql-session, morgan,
bcryptjs, body-parser, connect-flash, express-validator, passport, passport-local, timeago.js
nodemon -D

Minuto 42:54
Crea tabla y FOREIGN KEY

Minuto 47:05
createPool en lugar de createConnection

Minuto 1:10:26 https://youtu.be/qJ5R9WTW0_E?t=4226
Recibe los datos del formulario.

Minuto 1:12:40
Usa destructuring en link.js

`router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Link Saved Successfully');
    res.redirect('/links');
});`

Minuto 1:25:00
Usa timeago para pasar timestamp a fecha legible.

Minuto 1:53:30 
Mensages de confirmación acciones con connect.flash.
https://github.com/jaredhanson/connect-flash
Muy antigüo,hace 7 años que no se actualiza.


 Minuto 2:11:30 https://youtu.be/qJ5R9WTW0_E?t=7890
SignUp user

 Minuto 2:19:30 https://youtu.be/qJ5R9WTW0_E?t=8370
Uso de passport.

https://www.npmjs.com/package/passport
Ultima actualización hace 2 años.

 Minuto 2:35:19 https://youtu.be/qJ5R9WTW0_E?t=9319
Uso de bcryptjs

https://www.npmjs.com/package/bcryptjs
Ultima actualización hace 3 años.

Minuto 2:50:56 SignIn User.  https://youtu.be/qJ5R9WTW0_E?t=10256

Minuto 3:12:14 Protecting routes. https://youtu.be/qJ5R9WTW0_E?t=11534

Minuto 03:17:16 Links en la barra de navegación. https://youtu.be/qJ5R9WTW0_E?t=11836 
  
   






https://jwt.io/
https://github.com/ngx-translate/core
https://github.com/tomastrajan/angular-ngrx-material-starter

nginx alpine







complemento para VS Code:
   Comprobar ortografia. Code Spell Checker



# AngularIntro Doce Monos.
Nuevas extensiones:
Auto Close tag
Auto Rename tag

Se pueden pasar varios css en los componentes.

Componente es una funcionalidad.
Modulo es un conjunto de componentes.
Bootstrap es el componente que se iniciara
Provider es para inyectar (principalmente services)
Modelos formas de tipar lo que recibimos.


Interpolacion {{   }}

$event puede recibir un objeto $event.propiedad.

Meter Bootstrap en package.json
"styles":[
  "node_modules/bootstrap/dist/css....."
  ]

crtl-a = seleccionar todo.
crtl. = sugerencias.
pulsando enter añade el this.






