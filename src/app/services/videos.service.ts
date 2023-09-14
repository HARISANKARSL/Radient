import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http:HttpClient) { }
  videosApi(){
   return this.http.get<any>('assets/Api/videos.json')
  }
}
