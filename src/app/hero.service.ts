import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import {Heroes} from './mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
getHeroes(): Observable<Hero[]>{
  return of(Heroes);
}
  constructor() { }
}
