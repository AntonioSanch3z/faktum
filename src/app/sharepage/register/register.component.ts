import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;

  constructor(private fb: FormBuilder, private userService: UserService, 
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }, { validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password')!.value === fg.get('confirmPassword')!.value ? null! : {notmatched: true};
  }

  onSubmit() {
    //console.log(this.registrationForm.value);
    this.userSubmitted = true;

    if (this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("You have registered successfully");
    } else {
      this.alertify.error("Register information not valid");
    }
  }

  userData(): User {
    return this.user = {
      username: this.username.value,
      password: this.password.value,
    }
  }

  // Getter methods for form controls
  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

}
