import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherCardComponent } from './weather-container/weather-card/weather-card.component';
import { HeaderComponent } from './header/header.component';
import { OpenCardDirective } from './directives/open-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherCardComponent,
    HeaderComponent,
    OpenCardDirective,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
