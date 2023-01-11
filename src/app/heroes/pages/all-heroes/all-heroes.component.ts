import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../models/heroes/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss']
})
export class AllHeroesComponent implements OnInit {
  
  heroes!: Hero[]

  constructor(private service: HeroesService) { }

  ngOnInit(): void {
    this.service.heroes$.subscribe((data) => {
      console.log(data)
      this.heroes = data
    })

  }
}