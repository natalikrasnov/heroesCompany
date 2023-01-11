import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Hero } from '../../models/heroes/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.scss']
})
export class MyHeroesComponent implements OnInit {
  
  heroes!: Hero[]

  constructor(
    private heroesService: HeroesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.heroesService.heroes$.subscribe((data) => {
      console.log(data)
      this.heroes = data?.filter((hero: Hero) =>
        hero.guidId === this.authService.trainer$.value?._id
      )
    })

  }
}
