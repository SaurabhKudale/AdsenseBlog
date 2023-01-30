import { Component } from '@angular/core';
import { CarServiceService } from './services/car-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';
  blogs: any;

  constructor(private api: CarServiceService) { }

  ngOnInit() {
    this.getCarDetails();
  }

  getCarDetails()
  {
    debugger;
    this.api.getCars().subscribe((data) => {
      debugger;
      this.blogs = data;
    });
  }
}
