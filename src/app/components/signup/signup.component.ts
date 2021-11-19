import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User = {
    email: '',
    password: '',
    name:''
  };

  submitted = false;
  successMsg='';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Login Success');
    this.submitted = true;
  }

}
