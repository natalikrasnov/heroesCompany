import { createReducer, on } from "@ngrx/store";
import { Hero} from "../models/heroes/hero.model";
import { HeroesState } from "../models/heroes/heroesState.model";
import * as heroesActions from './heroes.action'

export const INITIAL_STATE: HeroesState = { heroes: [] };

export const heroesReducer = createReducer(
    INITIAL_STATE,
    on(
        heroesActions.addNewHero,
        (state: HeroesState, hero : Hero): HeroesState => ({
            ...state,
            heroes: [...state.heroes, hero ]
            })
    ),
    on(
        heroesActions.initHeroes,
        (state: HeroesState, {heroes} : HeroesState): HeroesState => ({
            ...state,
            heroes: [...heroes]
            })
    ),
    on(
       heroesActions.removeHero ,
        (state: HeroesState,  {id} :Hero ): HeroesState => ({
            ...state,
            heroes: [...state.heroes.filter((hero: Hero)=> hero.id !== id)]
        })
    )
)