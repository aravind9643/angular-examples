import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showHeader = false;

  ngOnInit(): void {
    const user = localStorage.getItem("user");
    if (user)
      this.showHeader = true;
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
}
