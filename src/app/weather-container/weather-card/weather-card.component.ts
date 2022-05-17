import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfo } from 'src/app/models/weather-info';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() cityName = '';
  currentWeather!: WeatherInfo;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather(this.cityName)
      .subscribe((weather) => (this.currentWeather = weather));
  }
}
