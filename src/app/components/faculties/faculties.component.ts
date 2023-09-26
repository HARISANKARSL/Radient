import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent {
  faculties:any=[]
constructor(private api:ApiService){}

ngOnInit(){
  this.api.getAllFaculties().subscribe((res)=>{
   this.faculties=res.faculties
  })
}
}
