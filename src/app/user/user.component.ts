import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userId:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   
   this.route.params.subscribe(params => {
      this.userId=params['id'];
  
    })
  }

}