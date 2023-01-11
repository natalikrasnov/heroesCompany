import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './store/heroes.reducer';
// import { MainComponent } from './pages/main/main.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { MyHeroesComponent } from './pages/my-heroes/my-heroes.component';
import { HeroIntroCardComponent } from './component/hero-intro-card/hero-intro-card.component';
import { MainHeroesPageComponent } from './pages/main-heroes-page/main-heroes-page.component';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';

@NgModule({
  declarations: [
    AllHeroesComponent,
    MyHeroesComponent,
    HeroIntroCardComponent,
    MainHeroesPageComponent,
    EditHeroComponent,
  ],
  imports: [
    SharedModule,
    // StoreModule.forRoot({heroes: heroesReducer})
  ]
})
export class HeroesModule { }
