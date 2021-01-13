import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService}from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  selectedHero: Hero={
    id:1,
    name:'jumpMan'
  };

  heroes:Hero[]=[];

  constructor(private HeroService: HeroService,  private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero):void{
    this.selectedHero=hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes():void{
    this.HeroService.getHeroes().subscribe(heroes =>this.heroes=heroes);
  }
}
