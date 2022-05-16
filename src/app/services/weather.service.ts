import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private API_KEY = '78adadfea890dd92d53b33292631ada4';

  constructor(private http: HttpClient) {}

  getCurrentWeather(cityName: string) {
    return this.http.get(`${this.baseUrl}?q=${cityName}&appid=${this.API_KEY}`);
  }
}
