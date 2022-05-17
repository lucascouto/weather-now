import { TestBed } from '@angular/core/testing';

import { WeatherCardService } from './weather-card.service';

describe('WeatherCardService', () => {
  let service: WeatherCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
