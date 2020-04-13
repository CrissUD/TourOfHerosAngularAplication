import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Spiderman', image: '../../assets/images/1.jpg' },
      { id: 2, name: 'Iron Man', image: '../../assets/images/2.jpg' },
      { id: 3, name: 'Hulk', image: '../../assets/images/3.jpg' },
      { id: 4, name: 'Thor', image: '../../assets/images/4.jpg' },
      { id: 5, name: 'Deadpool', image: '../../assets/images/5.jpg' },
      { id: 6, name: 'Batman', image: '../../assets/images/6.jpg' },
      { id: 7, name: 'Mr Fantastic', image: '../../assets/images/7.jpg' },
      { id: 8, name: 'Capitan America', image: '../../assets/images/8.jpg' },
      { id: 9, name: 'Wolverine', image: '../../assets/images/9.jpg' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
