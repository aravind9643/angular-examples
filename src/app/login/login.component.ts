import { Component } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  users = [
    { username: 'john123', password: "Test@123" },
    { username: 'jocky123', password: "Test@123" },
  ];

  constructor(
    private globalService: GlobalService
  ) { }

  login() {
    const user = this.users.find(u => u.username == this.username && u.password == this.password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/";
    }
    else {
      this.globalService.error("Error", "Invalid username and password");
    }
  }
}
