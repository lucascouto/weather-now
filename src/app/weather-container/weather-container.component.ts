import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  cities: City[] = [
    { name: 'Nuuk', country: 'GL' },
    { name: 'Urubici', country: 'BR' },
    { name: 'Nairobi', country: 'KE' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
