import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  cities: string[] = ['Nuuk', 'Urubici', 'Nairobi'];

  constructor() {}

  ngOnInit(): void {}
}
