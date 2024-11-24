
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;
  menuType: string;
  constructor() {
    this.email = '';
    this.password = '';
    this.menuType = 'overplay';
  }

  onLogin() {
    // Lógica para manejar el login
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
