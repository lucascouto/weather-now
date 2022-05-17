import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { WeatherInfo } from 'src/app/models/weather-info';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() city!: City;
  currentWeather!: WeatherInfo;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather(this.city.name)
      .subscribe((weather) => (this.currentWeather = weather));
  }

  getTemperatureColor(): Object {
    return {
      'low-temperature': this.currentWeather.temp <= 5,
      'medium-temperature':
        this.currentWeather.temp > 5 && this.currentWeather.temp <= 25,
      'high-temperature': this.currentWeather.temp > 25,
    };
  }
}
