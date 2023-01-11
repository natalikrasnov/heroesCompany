import { createAction, props } from '@ngrx/store';
import { Hero } from '../models/heroes/hero.model';
import { HeroesAction } from '../models/heroes/heroesState.model';


export const initHeroes = createAction(
    '[Heroes] init heroes',
    props<HeroesAction>()
)


export const addNewHero = createAction(
    '[Heroes] add new hero',
    props<Hero>()
)

export const removeHero = createAction(
    '[Heroes] delete hero',
    props<Hero>()
)