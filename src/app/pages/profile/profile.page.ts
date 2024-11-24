import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    username: '',
    bio: '',
    location: ''
  };

  constructor() { }

  saveProfile() {
    // Logic to save the user profile goes here
    console.log('Profile saved', this.userProfile);
  }
}
