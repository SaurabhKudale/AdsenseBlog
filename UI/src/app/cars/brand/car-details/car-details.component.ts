import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit, OnDestroy {
  brand_name: any;
  car_name: any;
  private subscription: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
       this.brand_name = params['brand-name'];
       this.car_name = params['car-name'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
