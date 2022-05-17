import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { mergeMap, Observable, Subscription, timer } from 'rxjs';
import { City } from 'src/app/models/city';
import { WeatherInfo } from 'src/app/models/weather-info';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  @Input() city!: City;
  currentWeather!: WeatherInfo;
  updateHour = new Date();
  timerSubscription!: Subscription;
  errorResponse = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.requestCurrentWeather();
  }

  getTemperatureColor(): Object {
    return {
      'low-temperature': this.currentWeather.temp <= 5,
      'medium-temperature':
        this.currentWeather.temp > 5 && this.currentWeather.temp <= 25,
      'high-temperature': this.currentWeather.temp > 25,
    };
  }

  requestCurrentWeather(): void {
    this.errorResponse = false;

    this.timerSubscription = timer(0, 10 * 60 * 1000)
      .pipe(mergeMap(() => this.loadWeatherData()))
      .subscribe({
        next: (weather) => {
          this.currentWeather = weather;
          this.updateHour = new Date();
        },
        error: () => (this.errorResponse = true),
      });
  }

  private loadWeatherData(): Observable<WeatherInfo> {
    return this.weatherService.getCurrentWeather(this.city.name);
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
