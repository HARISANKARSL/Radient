import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:"facilities",component:FacilitiesComponent
  },
  {
    path:'faculties',component:FacultiesComponent
  },
  {
path:'contact',component:ContactComponent
  },
  {
    path:"",redirectTo:"/home" ,pathMatch:'full'
  },
  {
    path:'courses',component:CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
