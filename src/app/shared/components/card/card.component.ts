import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  
  @Input("h1") h1!: string;
  @Input("h2") h2!: string;
  @Input("h3") h3!: string;
  @Input("h4") h4!: string;

  @Input("color") color!: string;
  @Input("info") info!: string[];
  @Input("image") image!: string;
  @Input("direction") direction!: string

  // @HostBinding('style.backgroundColor') backgroundColor!: string

    ngOnInit(): void {
        // this.backgroundColor = this.color
    }
}
