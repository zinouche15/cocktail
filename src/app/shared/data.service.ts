import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cocktail } from './cocktail.model';

@Injectable()
export class DataService {

  private cocktailSource = new BehaviorSubject<any>(Cocktail);
  currentCocktail = this.cocktailSource.asObservable();

  constructor() { }

  changeCoctail(cocktail: Cocktail) {
    this.cocktailSource.next(cocktail)
  }

}