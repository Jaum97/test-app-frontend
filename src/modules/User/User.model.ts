export type TokensType = {
  accessToken: string;
  refreshToken: string;
};

export class User {
  public _id: string;

  public id: string;
  public name: string;
  public email: string;
  public status: string;
  public tokens?: TokensType;
  public password?: string;

  constructor() {
    this.password = "";
    this._id = "";
    this.id = "";
    this.name = "";
    this.email = "";
    this.status = "";
    this.tokens = {} as TokensType;
  }
}
