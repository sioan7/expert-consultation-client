export class LoginRequest {
  usernameOrEmail: string;
  password: string;

  fromForm(request: any) {
    this.usernameOrEmail = request.usernameOrEmail;
    this.password = request.password;
  }
}
