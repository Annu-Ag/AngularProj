import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  userData = [
    {fname: 'Annu',lname:'Agarwal56',email:"abc@gmail.com"},
    {fname: 'Puja',lname:'Agarwal',email:"abc1@gmail.com"},
    {fname: 'Rahul',lname:'Agarwal',email:"abc2@gmail.com"},
    {fname: 'Pawan',lname:'Agarwal',email:"abc3@gmail.com"},
    {fname: 'Juhi',lname:'Agarwal',email:"abc4@gmail.com"}];

  users(){
   
    return this.userData;
  }
}
