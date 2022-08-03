import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService) { } //private alertify: AlertifyService

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token) {
      localStorage.setItem('token', token.userName)
      console.log('Login successful'); //this.alertify.success('Login successful');
    } else {
      console.log('Login not successful'); //this.alertify.error('Username or password incorrect');
    }
  }

}
