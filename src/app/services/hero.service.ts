import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/Rx";

import { HeroModel } from '../models/hero.model';
import { Constants } from "../utils/constants";

@Injectable()
export class HeroService {

  private data: any = {
    allHeroes: [],
    favoriteHeroes: []
  };

  public shownState: any = {
    isFavoritesShown: false
  }

  constructor(private http: Http) {
  }

  get allHeroes(): Array<HeroModel> {
    return this.data.allHeroes
  }

  set allHeroes(allHeroes: Array<HeroModel>) {
    this.data.allHeroes = allHeroes;
  }

  get favoriteHeroes(): Array<HeroModel> {
    return this.data.favoriteHeroes
  }

  set favoriteHeroes(favoriteHeroes: Array<HeroModel>) {
    this.data.favoriteHeroes = favoriteHeroes;
  }

  getAllRawHeroes() {
    return this.http.get(`https://gateway.marvel.com/v1/public/characters?limit=${Constants.limit}&apikey=fc731e6a6d0929f1753831b70395f0cc`)
      .map(response => response.json())
  }
  
  getAllHeroes() {
    return this.getAllRawHeroes().map(data => {
      if (!data && !data.data && !data.data.results) return;
      this.allHeroes = data.data.results.map((hero) => new HeroModel(hero));
    });
  }

  private addToFavorite(hero: HeroModel) {
    if (this.favoriteHeroes.length < Constants.maxFavoriteHeroes) {
      hero.isFavorite = true;
      this.favoriteHeroes.push(hero);
    }
  }

  private removeFromFavorite(hero: HeroModel) {
    let heroIndex = this.favoriteHeroes.indexOf(hero);
    this.favoriteHeroes.splice(heroIndex, 1);
    hero.isFavorite = false;
    if (!this.favoriteHeroes.length) this.shownState.isFavoritesShown = false;
  }

  toggleFavorite(hero: HeroModel) {
    if (hero.isFavorite) {
      this.removeFromFavorite(hero);
    } else {
      this.addToFavorite(hero);
    }
  }
}


