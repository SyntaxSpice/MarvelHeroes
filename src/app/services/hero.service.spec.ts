import { TestBed, inject, async} from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpModule } from '@angular/http';
import { HeroModel } from '../models/hero.model';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([HeroService], (heroService: HeroService) => {
    expect(heroService).toBeTruthy();
  }));

  it('toggleFavorite #1: new hero to favoriteHeroes should not be added', inject([HeroService], (heroService: HeroService) => {
    let hero = new HeroModel({id: 1, name:"a", thumbnail:"a", description:"b", comics: {available: 3, items: ["add", "dda"]}}),
        anotherHero = new HeroModel({id: 2, name:"a", thumbnail:"a", description:"b", comics: {available: 3, items: ["add", "dda"]}}),
        heroes = [hero,hero,hero,hero,hero];

    heroService.favoriteHeroes = heroes;
    heroService.toggleFavorite(anotherHero);
    expect(heroService.favoriteHeroes.length).toEqual(5);

  }));

  it('toggleFavorite #2: new hero to favoriteHeroes should be added', inject([HeroService], (heroService: HeroService) => {
    let hero = new HeroModel({id: 1, name:"a", thumbnail:"a", description:"b", comics: {available: 3, items: ["add", "dda"]}}),
        anotherHero = new HeroModel({id: 2, name:"a", thumbnail:"a", description:"b", comics: {available: 3, items: ["add", "dda"]}}),
        heroes = [hero,hero,hero,hero];

    heroService.favoriteHeroes = heroes;
    heroService.toggleFavorite(anotherHero);
    expect(heroService.favoriteHeroes.length).toEqual(5);
  }));

  it('toggleFavorite #3: old hero in favoriteHeroes should be removed', inject([HeroService], (heroService: HeroService) => {
    let hero = new HeroModel({id: 1, name:"a", thumbnail:"a", description:"b", comics: {available: 3, items: ["add", "dda"]}, isFavorite: true}),
        heroes = [hero];

    heroService.favoriteHeroes = heroes;
    heroService.toggleFavorite(hero);
    expect(heroService.favoriteHeroes.length).toEqual(0);
  }));

  it('toggleFavorite #4: favorite heroes should not be shown', inject([HeroService], (heroService: HeroService) => {
    let hero = new HeroModel({id: 1, name:"a", thumbnail:"a", description:"b", comics: {available: 3, items: ["add", "dda"]}}),
        heroes = [hero];

    heroService.favoriteHeroes = heroes;
    heroService.toggleFavorite(hero);
    expect(heroService.shownState.isFavoritesShown).toBeFalsy();
  }));

  it("should send get request", (done) => {
    inject([HeroService], (heroService: HeroService) => {
        heroService.getAllRawHeroes().subscribe((response) => {
          expect(response.code).toEqual(200);
          done();
        })
    })();
  });

  it("should get 100 heroes from Marvel API", (done) => {
    inject([HeroService], (heroService: HeroService) => {
        heroService.getAllRawHeroes().subscribe((response) => {
          expect(response.data.count).toEqual(100);
          expect(response.data.results.length).toEqual(100);
          done();
        })
    })();
  });

  it("object in allHeroes array should be instance of HeroModel", (done) => {
    inject([HeroService], (heroService: HeroService) => {
        heroService.getAllHeroes().subscribe((response) => {
          expect(heroService.allHeroes[0] instanceof HeroModel).toBeTruthy();
          done();
        })
    })();
  });
  


});