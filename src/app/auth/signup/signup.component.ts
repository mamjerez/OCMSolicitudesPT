import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from './../../shared/models/user.model';
// import { SignupService } from '../signup/signup.service';
import { UsersService } from '../../../app/admin/users/users.service';
import { MyValidators } from '../../libs/validators';
import { LogeadoService } from '../../services/logeado.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  user: User;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // public signupService: SignupService,
    public usersService: UsersService,
    private logeadoService: LogeadoService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.user = new User();
    // console.log(this.user);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido1: ['', [Validators.required, Validators.minLength(3)]],
      apellido2: ['', [Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(1)]],
    }, {
      validators: [MyValidators.isValidPassword]
    });
  }

  // #region  Nombres de campos para usar en HTML.
  get nombreField() {
    return this.form.get('nombre');
  }

  get apellido1Field() {
    return this.form.get('apellido1');
  }

  get apellido2Field() {
    return this.form.get('apellido2');
  }
  get emailField() {
    return this.form.get('email');
  }

  get userNameField() {
    return this.form.get('userName');
  }

  get passwordField() {
    return this.form.get('password');
  }

  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }
  //#endregion

   signUp() {
    let errorText: string;

    if (this.form.valid) {
      this.user.nombre = this.form.value.nombre;
      this.user.apellido1 = this.form.value.apellido1;
      this.user.apellido2 = this.form.value.apellido2;
      this.user.email = this.form.value.email;
      this.user.userName = this.form.value.userName;
      this.user.password = this.form.value.password;
      // No se inician para que tome los valores por defecto en MySQL
      // this.user.time_create = new Date();
      // this.user.time_update = new Date();
      this.user.idUserCreate = 1;
      this.user.idUserUpdate = 1;
    }

    // this.signupService.signUp(this.user).subscribe((response => {
    this.usersService.signUp(this.user).subscribe((response => {
     if (response === 'user creado') {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: '¡Te has registrado correctamente!',
          showConfirmButton: false,
          timer: 3000
        });
        this.logeadoService.estaLogeado();
        this.router.navigate(['/inicio']);
      } else {
        console.log(JSON.stringify(response));
        errorText = 'Error en la conexión.';
        Swal.fire({
          title: '¡Error!',
          text: errorText,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }));
  }

  leerPolitica() {
    Swal.fire({
      html: `
    <div>
    <h4 style = "color: rgb(20, 20, 230);text-align: center">Política de privacidad de ocmjerez.org</h4>
        <h6 style = "color:red; text-align: center; text-align: justify">Para recibir la información sobre
         sus Datos Personales, la finalidad y las partes con las que se comparte, contacten con el Titular.</h6>

        <h5 style = "font-size: 8px"><br>Titular y Responsable de Tratamiento de los Datos.
        Clases de Datos recogidos
        El Titular no proporciona una lista de categorías de Datos Personales recogidos.

         La información completa referente a cada categoría de Datos personales que se recogen se proporciona
         en las secciones de la presente Política de Privacidad dedicadas a tal fin o mediante textos explicativos
          específicos que se muestran antes de la recogida de dichos Datos.
        Los Datos Personales podrán ser proporcionados libremente por el Usuario o, en caso de los Datos de Uso, serán
         recogidos automáticamente cuando usted emplee esta Aplicación.
        Todos los Datos solicitados por esta Aplicación son obligatorios y la negativa a proporcionarlos podrá hacer que
         esta Aplicación se vea en la imposibilidad de prestar sus servicios. En los casos en los que esta Aplicación indique
         específicamente que ciertos Datos no son obligatorios, los Usuarios serán libres de no comunicar tales Datos sin que
         esto tenga consecuencia alguna sobre la disponibilidad o el funcionamiento del servicio.
        Los Usuarios que tengan dudas sobre qué Datos son obligatorios pueden contactar con el Titular.
        El uso de Cookies – o de otras herramientas de seguimiento – por parte de esta Aplicación o por
        los titulares de servicios de terceros utilizados por esta Aplicación tiene como finalidad la prestación del
        servicio solicitado por el Usuario, además de cualesquiera otras finalidades que se describan en el presente
        documento y en la Política de Cookies, en caso de estar disponible.

        El Usuario asume la responsabilidad respecto de los Datos Personales de terceros que se obtengan, publiquen o compartan
         a través de esta Aplicación
        y declara por la presente que tiene el consentimiento de dichos terceros para proporcionar dichos Datos al Titular.

       <br>Modalidad y lugar del Tratamiento de los Datos recogidos
        Modalidades de Tratamiento
        El Responsable de Tratamiento tratará los Datos de los Usuarios de manera adecuada y adoptará las medidas de seguridad
        apropiadas para impedir el acceso,
         la revelación, alteración o destrucción no autorizados de los Datos.
        El tratamiento de Datos se realiza mediante ordenadores y/o herramientas informáticas, siguiendo procedimientos y modalidades
         organizativas
        estrictamente relacionadas con las finalidades señaladas. Además del Responsable de Tratamiento, en algunos casos podrán acceder
        a los Datos ciertas
        categorías de personas encargadas relacionadas con el funcionamiento de la página (administración, ventas, marketing,
           departamento jurídico
        y de administración de sistemas) o contratistas externos que presten servicios al Responsable de Tratamiento
         (tales como proveedores externos
        de servicios técnicos, empresas de mensajería, “hosting providers”, empresas de informática, agencias de comunicación)
        que serán nombrados por
        el Titular como Encargados del Tratamiento, si fuera necesario. Se podrá solicitar al Responsable de Tratamiento en
         cualquier momento una lista
         actualizada de dichas personas.

        <br>Luga
        Los Datos serán tratados en la sede operativa del Responsable de Tratamiento, así como en otros lugares en los que se encuentren
        situadas las partes
        que también estén involucradas en dicho tratamiento. Para más información, por favor póngase en contacto con el
         Responsable de Tratamiento.

        Período de conservación
        Los Datos serán tratados durante el plazo necesario para prestar el servicio solicitado por el Usuario, o el que se requiera
        en función de las finalidades
        descritas en este documento, y el Usuario tendrá en todo momento la facultad de solicitar la interrupción de su Tratamiento
        o la cancelación de los Datos.

        Información adicional sobre la recogida de Datos y su tratamiento
        Defensa jurídica
        Los Datos Personales del Usuario podrán ser utilizados para la defensa jurídica del Titular en juicio o en las fases prejudiciales
         previas a un posible
        pleito derivado del uso abusivo por parte del Usuario de esta Aplicación o de los servicios relacionados.
        El Usuario es consciente de que el Titular puede ser requerido por autoridades públicas a fin de revelar Datos Personales.

        Información adicional acerca de los Datos Personales del Usuario
        Además de las informaciones contenidas en esta política de privacidad, esta Aplicación podrá proporcionar al Usuario información
        contextual relativa a
        servicios específicos o a la recogida y tratamiento de los Datos Personales.

       <br> Log del sistema y mantenimiento.
        Por motivos relativos al funcionamiento y el mantenimiento, esta Aplicación y cualesquiera otros servicios de terceros que se
         utilicen podrán recoger
        un Log del sistema, esto es, archivos que registren las interacciones y que pueden contener Datos Personales, tales como
        la dirección IP del Usuario.

       <br>Información no contenida en esta política de privacidad.
        Se podrá solicitar en cualquier momento información adicional sobre la recogida y el tratamiento de los Datos Personales
         al Responsable de Tratamiento.
         Encontrará la información de contacto al inicio del presente documento.

        Ejercicio de los derechos por los Titulares de los Datos
        Los titulares a los que se refieren los Datos Personales tienen derecho a obtener en cualquier momento la confirmación de que
         estos han sido almacenados
        por el Responsable de Tratamiento, a conocer su contenido y origen, a verificar su exactitud o solicitar que sean completados,
         cancelados, actualizados
        o rectificados, a que sean anonimizados o a que se bloqueen aquellos Datos Personales que están siendo tratados en contravención
         de las leyes,
        así como a oponerse a su tratamiento por cualquier motivo legítimo. Las solicitudes deberán remitirse al Responsable de Tratamiento
         utilizando los
        datos de contacto indicados anteriormente.

        Esta Aplicación no permite solicitudes “Do Not Track”.
        Para determinar si cualquiera de los servicios de terceros que utiliza acepta solicitudes “Do Not Track”, por favor lea sus
        políticas de privacidad.

        Modificación de esta política de privacidad
        El Responsable de Tratamiento se reserva el derecho de modificar esta política de privacidad en cualquier momento notificándolo
         a los Usuarios a
        través de esta página. Se recomienda encarecidamente que revisen esta página con frecuencia, tomando como referencia la fecha de
         la última modificación
        indicada al final. En el caso de que un Usuario esté en desacuerdo con alguna de las modificaciones realizadas a esta Política,
         el Usuario deberá cesar
        en el uso de esta Aplicación y podrá solicitar al Responsable de Tratamiento que elimine sus Datos Personales. Salvo que se
         indique lo contrario,
        la política de privacidad vigente en cada momento será de aplicación a todos los Datos Personales que el Responsable de
         Tratamiento haya recogido
        hasta entonces.

        Información acerca de esta política de privacidad
        El Responsable de Tratamiento es responsable de esta política de privacidad,
        que ha sido redactada a partir de los módulos proporcionados por Iubenda y almacenados en los servidores de Iubenda.</h5>
      </div>
    `,

    });
  }

}
