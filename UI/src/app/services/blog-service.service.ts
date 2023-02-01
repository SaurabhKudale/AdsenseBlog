import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url:string = "https://blogapi.findyourwheel.com/api/";
  constructor(private http:HttpClient) { }

  getBlogs(){
    return this.http.get(this.url + 'get_blogs.php'); 
  }

  getPostDetails(id:any){
    return this.http.get(this.url + 'get_post.php?id='+ id +''); 
  }
}
