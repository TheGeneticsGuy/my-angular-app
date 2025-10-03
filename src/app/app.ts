import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  styles: [
    `h3 {
      color: dodgerblue;
      font-weight: 700;
    }`
  ]
})
export class App {
  protected readonly name = 'Aaron Topping'

  username: string = '';
  usernameStatus: string = 'Please enter a username';
  secretMessage: string = 'Aaron Topping is the GOAT!!!';
  showSecret: boolean = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  onUpdateUserName(event: Event) {
    this.usernameStatus = 'Username is ' + this.username;
  }

  clearUserName() {
    this.username = '';
    this.usernameStatus = 'Please enter a username';
  }

  userNameIsEmpty() {
    return this.username === '';
  }
}
