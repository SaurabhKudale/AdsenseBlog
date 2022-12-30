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

  objCarDetails: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.brand_name = params['brand-name'];
      this.car_name = params['car-name'];
    });

    this.objCarDetails.push({
      "id": 1,
      "model": "Tata Nexon",
      "variant": "XZ+",
      "price": "Rs. 7.69 - 14.17 Lakh",
      "fuelType": "Petrol & Diesel",
      "transmission": "Manual & Automatic",
      "dieselEnginePower": "1497 cc",
      "petrolEnginePower": "1199 cc",
      "bootSpace": "350 Liters",
      "mileage": "17.57 - 22.07 Kmpl",
      "groundClearance": "209 mm",
      "airbags": "Driver and Passenger",
      "powerWindows": "Front and Rear",
      "abs": "Yes",
      "interiorImages": [
        {
          "url": "https://media.zigcdn.com/media/model/2020/Jan/front-928671217_930x620.jpg",
          "alt": "Slide 1"
        },
        {
          "url": "https://media.zigcdn.com/media/model/2020/Jan/side-mirror-rear-angle-1852477871_930x620.jpg",
          "alt": "Slide 2"
        },
        {
          "url": "https://media.zigcdn.com/media/model/2020/Jan/side-view-1573363045_930x620.jpg",
          "alt": "Slide 3"
        },
        {
          "url": "https://media.zigcdn.com/media/model/2020/Jan/rear-3-4-left-1202675290_930x620.jpg",
          "alt": "Slide 4"
        }],
      "overviewTabHeaders": [
        {
          "tabHeader": "Safety1",
          "tabDescription": "1. Nexon's high-strength steel structure absorbs impact energy and protects the passenger during an unfortunate collision."
        },
        {
          "tabHeader": "Safety2",
          "tabDescription": "2. Nexon's high-strength steel structure absorbs impact energy and protects the passenger during an unfortunate collision."
        },
        {
          "tabHeader": "Safety3",
          "tabDescription": "3. Nexon's high-strength steel structure absorbs impact energy and protects the passenger during an unfortunate collision."
        }]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
