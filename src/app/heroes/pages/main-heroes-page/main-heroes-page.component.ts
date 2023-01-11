import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-heroes-page',
  templateUrl: './main-heroes-page.component.html',
  styleUrls: ['./main-heroes-page.component.scss']
})
export class MainHeroesPageComponent {
  titles: string[] = ["all heroes", "my heroes"]

  constructor(){}
  
  getRouterLink(pageTitle: string) {
    switch (pageTitle) {
      case this.titles[0]: return"/heroes/allHeroes";
      case this.titles[1]: return "/heroes/myHeroes";
      default: return '/'
    }
  }
}

