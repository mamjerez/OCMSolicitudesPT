import { ComponentFactoryResolver, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core'

export interface IUser {
  idUser?: number ;
  nombre?: string;
  apellido1?: string;
  apellido2?: string;
  email?: string;
  user_name?: string;
  password?: string;
  avatar_url?: string ;
  observaciones?: string ;
  time_create?: Date;
  time_update?: Date ;
  idUser_create?: number;
  idUser_update?: number;
}

export class User implements IUser {
  constructor(
    public idUser?: number,
    public nombre?: string,
    public apellido1?: string,
    public apellido2?: string,
    public email?: string,
    public user_name?: string,
    public password?: string,
    public avatar_url?: string,
    public observaciones?: string,
    public time_create?: Date,
    public time_update?: Date,
    public idUser_create?: number,
    public idUser_update?: number,
  ) {
      // this.idUser = idUser ? idUser : null;
      // this.login = login ? login : null;
      // this.firstName = firstName ? firstName : null;
      // this.lastName = lastName ? lastName : null;
      // this.email = email ? email : null;
      // this.activated = activated ? activated : false;
      // this.langKey = langKey ? langKey : null;
      // this.authorities = authorities ? authorities : null;
      // this.createdBy = createdBy ? createdBy : null;
      // this.createdDate = createdDate ? createdDate : null;
      // this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
      // this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
      // this.password = password ? password : null;
  }
}


// Para usarlo en otros Componnets.
// user: User;

// idUser: number ;
// nombre: string;
// apellido1: string;
// apellido2: string;
// email: string;
// user_name: string;
// password: string;
// avatar_url: string ;
// observaciones: string ;
// time_create: Date;
// time_update: Date ;
// idUser_create: number;
// idUser_update: number;

// constructor() { }

// ngOnInit() {
//   this.user = new User(
// this.idUser,
// this.nombre,
// this.apellido1,
// this.apellido2,
// this.email,
// this.user_name,
// this.password,
// this.avatar_url,
// this.observaciones,
// this.time_create,
// this.time_update,
// this.idUser_create,
// this.idUser_update
//   );
// }
