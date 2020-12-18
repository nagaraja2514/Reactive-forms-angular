import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  });
  deta={
    user:"",
    password:"",
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleOutput(): void {
    console.log(this.deta)

  }

}
