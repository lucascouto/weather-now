import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherCardService {
  private _actualCard = new BehaviorSubject<string>('');
  actualCard$ = this._actualCard.asObservable();

  setActualCard(city: string): void {
    this._actualCard.next(city);
  }
}
