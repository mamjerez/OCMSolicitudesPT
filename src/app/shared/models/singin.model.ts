export interface ISingIn {
  token?: string | null;
  idUser?: string | null;
}

export class SingIn implements ISingIn {
  constructor(
    public token?: string | null,
    public idUser?: string | null
  ) {
    this.token = token ? token : null;
    this.idUser = idUser ? idUser : null;
        }
}
