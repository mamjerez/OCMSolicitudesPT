export interface ISingIn {
  token?: string | null;
}

export class SingIn implements ISingIn {
  constructor(
    public token?: string | null
  ) {
    this.token = token ? token : null;
        }
}
