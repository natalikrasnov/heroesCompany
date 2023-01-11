import { Component, Input , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Hero } from '../../models/heroes/hero.model';

@Component({
  selector: 'app-hero-intro-card',
  templateUrl: './hero-intro-card.component.html',
  styleUrls: ['./hero-intro-card.component.scss']
})
export class HeroIntroCardComponent implements OnInit{

  @Input("readOnly") isReadOnly: boolean = true;
  @Input("hero") hero!: Hero;

  // isUserHero:boolean = false

  isEditOpen: boolean = false;

  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.isReadOnly = this.authService.trainer$.value?._id !== this.hero.guidId
  }

  goToEdit() {
    if (this.isReadOnly) {
      alert("this is private data! ")
      return;
    } 
    console.log("edit")
    this.isEditOpen = true;
    // this.router.navigate([""])
  }

  closeEditModal() {
    this.isEditOpen = false
  }

}
