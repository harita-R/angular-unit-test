import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //User object
  User = {
    email: '',
    password: '',
  };

  submitted = false;
  errorMsg = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    alert('Login Success');
    this.submitted = true;
  }
}
