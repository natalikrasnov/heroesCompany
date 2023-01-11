import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/heroes/hero.model';
import { HeroesService } from '../services/heroes.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesResolver implements Resolve<Hero[]> {

  constructor(private service: HeroesService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
  //   this.service.addNewHero({
  //   id: "2",
  //   name: "max max",
  //   ability: 'attacker',
  //   guidId: "2",
  //   DateStartTrain: new Date(),
  //   suiteColor: 'purple',
  //   startingPower: 5,
  //   currentPower: 9
  // })
    return this.service.heroes$
  }
}
