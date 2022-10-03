import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  userLogin(){
    console.log(this.loginForm.value);
  }
  get user(){
   return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
   }
}
