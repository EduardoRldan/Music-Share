import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    standalone: false
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor() { }

  register() {
    // Aquí iría la lógica para registrar al usuario
    console.log('Correo:', this.email, 'Contraseña:', this.password);
  }
}
