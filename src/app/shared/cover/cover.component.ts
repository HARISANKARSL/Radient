import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  showval:string="";
 
  showcover: boolean=false;
  constructor(private route:Router){
    
 
    
    route.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if( val.url=='/home'  ){
          this.showcover=true
        }else{
          this.showcover=false
        }
      }
    })
   
  }
ngOnInit(){
  if(this.route.url==='/about'){
    this.showval="About"
  }else if(this.route.url==='/facilities'){
this.showval="Facilities";

  }else if(this.route.url==='/faculties'){
    this.showval="Faculties";
 
      }
      else if(this.route.url==='/contact'){
        this.showval="Contact";
     
          }
          else if(this.route.url==='/courses'){
            this.showval='Courses'
          }
                                         
                  
}
}
