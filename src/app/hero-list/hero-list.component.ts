import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { HeroService } from '../services/hero.service';

import { HeroModel } from '../models/hero.model';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  allHeroes: Array<HeroModel>;
  favoriteHeroes: Array<HeroModel>;
  shownState: any;

  constructor(private heroService: HeroService){
    this.allHeroes = this.heroService.allHeroes;
    this.favoriteHeroes = this.heroService.favoriteHeroes;
    this.shownState = this.heroService.shownState;
  }

  showFavoriteHeroes(){
    this.shownState.isFavoritesShown = true;
  }

  showAllHeroes(){
    this.shownState.isFavoritesShown = false;
  }
}
