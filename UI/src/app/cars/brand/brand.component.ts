import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit, OnDestroy {
  brand_name: any;
  car_name: any;
  private subscription: any;
  cars: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.brand_name = params['brand-name'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}