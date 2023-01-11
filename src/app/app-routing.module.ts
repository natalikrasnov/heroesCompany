import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module')
                          .then(m=> m.AuthRoutingModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import("./heroes/heroes-routing.module")
      .then(m => m.HeroesRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
