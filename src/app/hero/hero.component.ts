import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

import { HeroModel } from '../models/hero.model';
import { Constants } from '../utils/constants';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{  
  @Input() hero: HeroModel;
  showDetails: boolean = false;
  favoriteHeroes: Array<HeroModel>;
  maxFavoriteHeroes: number = Constants.maxFavoriteHeroes;

  constructor(private heroService: HeroService){}

  ngOnInit(){
    this.favoriteHeroes = this.heroService.favoriteHeroes;
  }

  showFullInfo(){
    this.showDetails = true;    
  }

  toggleFavorite(){
    this.heroService.toggleFavorite(this.hero);
  }
}
