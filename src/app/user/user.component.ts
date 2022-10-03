import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDataService } from './../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userId: any;
user: any;
show= false;
  constructor(private route:ActivatedRoute, private userdata:UserDataService) {
    console.log(userdata.users());
    this.user= userdata.users();
   }

  ngOnInit(): void {
   
   this.route.params.subscribe(params => {
      this.userId=params['id'];
  
    })
  }
  addUser(){
    this.show= true;
  }
  userDetails(item:any){
    console.log("item",item);
  }
  }
