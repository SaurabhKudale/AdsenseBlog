import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  constructor(private http:HttpClient) { }

  getCars(){
    return this.http.get('http://localhost:3000/blogs'); 
  }
}
