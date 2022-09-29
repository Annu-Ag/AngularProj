import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NoPageComponent } from './no-page/no-page.component';
const routes: Routes = [
  {
    path:'user/:id',
    component: UserComponent
  },
  {
    path:'About',
    component: AboutComponent,
    children:[{path:'company',component:AboutCompanyComponent},
    {path:'me',component:AboutMeComponent}]
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'**',
    component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],







exports: [RouterModule]
})
export class AppRoutingModule { }
