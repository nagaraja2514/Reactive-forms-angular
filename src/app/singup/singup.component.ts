import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  singup = new FormGroup({
    name: new FormControl("", Validators.required),
    father: new FormControl("", Validators.required),
    college: new FormControl("", Validators.required),
    village: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    Distric: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    mobile: new FormControl("", Validators.required),
    mail: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required,Validators.minLength(8)]),
    confirmpassword: new FormControl("", Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }
  handleOutput(): void {

  }
}
