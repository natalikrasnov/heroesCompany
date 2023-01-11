import { Hero } from './hero.model';

export interface HeroesAction{
    heroes: Hero[]
}

export class HeroesState implements HeroesAction{
    constructor( public heroes: Hero[] ){}
}
