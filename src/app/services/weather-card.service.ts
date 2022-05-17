import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherCardService {
  private _currentCard = new BehaviorSubject<string>('');
  currentCard$ = this._currentCard.asObservable();

  setCurrentCard(city: string): void {
    this._currentCard.next(city);
  }
}
