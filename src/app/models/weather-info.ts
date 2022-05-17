export interface RootWeatherInfo {
  main: WeatherInfo;
}

export interface WeatherInfo {
  temp: number;
  humidity: number;
  pressure: number;
}
