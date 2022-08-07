import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showLogin:boolean = true;

  constructor(private router: Router, public authService: AuthService, private alertify: AlertifyService) {
   }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    this.alertify.error('You have logged out');
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }

}