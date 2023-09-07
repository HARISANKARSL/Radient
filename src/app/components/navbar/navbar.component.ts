import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarScroll=false;
  @HostListener('window:scroll',['$event'])
    scrollCheck(){
  if(window.pageYOffset>100){
    this.isNavbarScroll=true
  }else{
    this.isNavbarScroll=false
  }
    }
}
