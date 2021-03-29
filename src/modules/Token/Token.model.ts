export class Token {
  public accessToken: string;
  public refreshToken: string;

  constructor() {
    this.accessToken = "";
    this.refreshToken = "";
  }
}
