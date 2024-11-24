import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  onLogin() {
    // Lógica para manejar el login
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
