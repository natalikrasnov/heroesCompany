import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscribable, Subscription } from 'rxjs';
import { Hero } from '../models/heroes/hero.model';

const initHeroes: Hero[] = [
  {
    id: "1",
    name: "Natali Krasnov",
    ability: 'defender',
    guidId: "1",
    DateStartTrain: new Date(),
    suiteColor: 'yellow',
    startingPower: 1,
    currentPower: 5
  }
]

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  private getFromLocalStorage(): Hero[] {
    const heroesString = localStorage.getItem("heroes")
    console.log("get from local storage", heroesString)
    if(!heroesString) return initHeroes
    return JSON.parse(heroesString)
  }

  private setToLocalStorage(heroes: Hero[])  {
    localStorage.setItem("heroes", JSON.stringify(heroes))
  }

  private _heroes$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.getFromLocalStorage())
  
  heroes$: Observable<Hero[]> = this._heroes$.asObservable()

  constructor() { }

  addNewHero(hero: Hero) {
    const heroes = this._heroes$.value;
    heroes.push(hero);

    this.setToLocalStorage(heroes)
    this._heroes$.next(heroes);
  }

  editHero(newHeroData: Hero) {
    const heroes = this._heroes$.value.map(hero =>
      hero.id === newHeroData.id ? newHeroData : hero
    );
    this.setToLocalStorage(heroes)
    this._heroes$.next(heroes);
  }
  
}
