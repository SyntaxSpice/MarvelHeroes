import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroService } from "../services/hero.service";
import { HttpModule } from '@angular/http';
import { HeroListComponent } from './hero-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeroComponent } from '../hero/hero.component';

describe('HeroListComponent', () => {
    let component: HeroListComponent;
    let fixture: ComponentFixture<HeroListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeroService],
            declarations: [HeroListComponent, HeroComponent],
            imports: [HttpModule, NgxPaginationModule]
        });

        fixture = TestBed.createComponent(HeroListComponent);
        component = fixture.componentInstance;
    });


    it('HeroListComponent should be created', () => {
        expect(component).toBeDefined();
    });

    it('showFavoriteHeroes() should change isFavoritesShown to true)', () => {
        expect(component.shownState.isFavoritesShown).toBe(false, 'off at first');
        component.showFavoriteHeroes();
        expect(component.shownState.isFavoritesShown).toBe(true, 'on after click on "All" button');
    });

    it('showAllHeroes() should change isFavoritesShown to false)', () => {
        expect(component.shownState.isFavoritesShown).toBe(false, 'off at first');
        component.showFavoriteHeroes();
        component.showAllHeroes();
        expect(component.shownState.isFavoritesShown).toBe(false, 'on after click on "Favorite" button');
    });
}); 