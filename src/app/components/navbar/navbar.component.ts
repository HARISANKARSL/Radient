import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarScroll=false;
  isSidebarOpen=false;
  @HostListener('window:scroll',['$event'])
    scrollCheck(){
  if(window.pageYOffset>100){
    this.isNavbarScroll=true
  }else{
    this.isNavbarScroll=false
  }
    }
    
    openSidebar(){
      this.isSidebarOpen=true;
      document.body.style.setProperty('overflow','hidden')
          }
          closeSidebar(){
      this.isSidebarOpen=false;
      document.body.style.setProperty('overflow','scroll')
          }
      
}
