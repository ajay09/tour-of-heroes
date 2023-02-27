import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

import { HEROES } from './mock-heroes';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient,
  ) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.httpClient.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find((h) => {return h.id === id;})!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
