import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = "Connecte-vouz";

  loginForm: FormGroup;
  loading = false;
  errorMessage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
