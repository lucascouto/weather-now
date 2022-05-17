import { Component, Input, OnInit } from '@angular/core';
import { interval, mergeMap, timer } from 'rxjs';
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
  updateHour = new Date();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    timer(0, 10 * 60 * 1000)
      .pipe(mergeMap(() => this.loadData()))
      .subscribe((weather) => {
        this.currentWeather = weather;
        this.updateHour = new Date();
      });
  }

  getTemperatureColor(): Object {
    return {
      'low-temperature': this.currentWeather.temp <= 5,
      'medium-temperature':
        this.currentWeather.temp > 5 && this.currentWeather.temp <= 25,
      'high-temperature': this.currentWeather.temp > 25,
    };
  }

  private loadData() {
    return this.weatherService.getCurrentWeather(this.city.name);
  }
}
