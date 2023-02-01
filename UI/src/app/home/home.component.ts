import { Component } from '@angular/core';
import { BlogService } from '../services/blog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  blogs: any;

  constructor(private api: BlogService) { }

  ngOnInit() {
    this.getCarDetails();
  }

  getCarDetails()
  {
    debugger;
    this.api.getBlogs().subscribe((data:any) => {
      debugger;
      this.blogs = data.body;
    });
  }
}
