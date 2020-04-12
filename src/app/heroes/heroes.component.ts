import { Component, OnInit } from '@angular/core';
import { Heroes } from '../mockHeroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = Heroes;
  selectedHero: Hero;

  constructor() {}

  ngOnInit(): void {}

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
