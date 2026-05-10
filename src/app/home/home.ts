import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocationinfo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: 'Test Homeps',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
