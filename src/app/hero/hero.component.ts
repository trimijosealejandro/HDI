import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { Heroes } from '../mock-hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes=Heroes;

  selectedHero: Hero={
    id:1,
    name:'jumpMan'
  };

  onSelect(hero: Hero):void{
    this.selectedHero=hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
