import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  hideLinks=true;
  constructor(private route:Router) { 
   
  }

  ngOnInit(): void {
  }
  aboutCompany(){
    this.route.navigate(
      ['/About/company'],
      { queryParams: { id: '2',name:'aaa' } }
    );
    this.hideLinks=false;
  }
  aboutMe(){
    this.hideLinks=false;
  }
}
