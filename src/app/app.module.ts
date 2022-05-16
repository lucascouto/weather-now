import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherCardComponent } from './weather-container/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
