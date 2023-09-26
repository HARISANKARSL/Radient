import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  getAllFaculties(){
    return this.http.get<any>("./assets/Api/faculties.json")
  }
}
