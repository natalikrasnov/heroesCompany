import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroesComponent } from './pages/my-heroes/my-heroes.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { MainHeroesPageComponent } from './pages/main-heroes-page/main-heroes-page.component';
import { HeroesResolver } from './resolvers/heroes.resolver';

const routes: Routes = [
  {
    path: "",
    component: MainHeroesPageComponent,
    resolve: {
      heroesResolver: HeroesResolver
    },
    children: [
      {
        path: "myHeroes", component: MyHeroesComponent
      },
      {
        path: "allHeroes", component: AllHeroesComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HeroesRoutingModule { }