import { Component, Input , Output, EventEmitter, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../models/heroes/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit{
  
  @Input("hero") hero!: Hero;
  @Output() onClose = new EventEmitter<void>()
  
  info!: string[];
  form!: FormControl<string | null>[];

  formEntitiesNames = {
    name: { type: "text", divType: "input"},
    ability: { divType: "select", options: ['attacker', 'defender']},
    guidId: { type: "text", divType: "input"},
    DateStartTrain: { type: "date", divType: "input" },
    suiteColor: { type: "color", divType: "input" },
    startingPower: { type: "number", divType: "input" },
    currentPower: { type: "number", divType: "input" }
  };

  constructor(private fb: FormBuilder, private service:HeroesService){}
    
  ngOnInit(): void {
    this.info = [
      `Hero ID: ${this.hero.id} <br/>`,
      `Date Start Train: ${(new Date(this.hero.DateStartTrain)).toDateString()}`,
      `starting Power: ${this.hero.startingPower}`
    ]

    this.form = Object.keys(this.formEntitiesNames).map((key) =>
      this.fb.control("this.hero[key]", [Validators.required])
    )
  }

  onButtonClose(event: Event, toClose: boolean) {
    if (toClose) {
      this.onClose.emit()
      return
    }

    event.stopPropagation()
  }

  onSubmit(form: FormGroup) {
    console.log(form)
    const heroArrayEntities: FormArray = <FormArray>form.get('userInputs')
    
    try {
      const newHero: Hero = {
        ...this.hero,
        name: heroArrayEntities.at(0).value,
        ability: heroArrayEntities.at(1).value,
        guidId: heroArrayEntities.at(2).value,
        DateStartTrain: new Date(heroArrayEntities.at(3).value),
        suiteColor: heroArrayEntities.at(4).value,
        startingPower: heroArrayEntities.at(5).value,
        currentPower: heroArrayEntities.at(6).value
      }

      this.service.editHero(newHero)   
      this.onClose.emit()
    } catch (error) {
      alert("error on edit user: "+ error)
    }
  }      
}