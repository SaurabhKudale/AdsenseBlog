import { Component } from '@angular/core';
import { BlogService } from './services/blog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
