import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Spiderman',
    image: '../../assets/images/1.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
