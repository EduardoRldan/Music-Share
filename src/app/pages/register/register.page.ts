import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string | undefined;
  password: string | undefined;

  constructor() { }

  onRegister() {
    // Aquí puedes manejar la lógica de registro, por ejemplo, enviar los datos a un servicio
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
