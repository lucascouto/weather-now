import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RootWeatherInfo, WeatherInfo } from '../models/weather-info';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private API_KEY = '78adadfea890dd92d53b33292631ada4';

  constructor(private http: HttpClient) {}

  getCurrentWeather(cityName: string) {
    return this.http
      .get<RootWeatherInfo>(
        `${this.baseUrl}?q=${cityName}&appid=${this.API_KEY}&units=metric`
      )
      .pipe(map((rootWeatherInfo) => rootWeatherInfo.main));
  }
}
