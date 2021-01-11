import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService}from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes:Hero[]=[];

  selectedHero: Hero={
    id:1,
    name:'jumpMan'
  };

  onSelect(hero: Hero):void{
    this.selectedHero=hero;
  }
  getHeroes():void{
    this.HeroService.getHeroes().subscribe(heroes =>this.heroes=heroes);
  }

  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
