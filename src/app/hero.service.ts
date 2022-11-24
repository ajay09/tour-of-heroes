import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero} from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find((h) => {return h.id === id;})!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
