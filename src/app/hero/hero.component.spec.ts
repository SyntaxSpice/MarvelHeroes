import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from "./hero.component";
import { HeroService } from "../services/hero.service";
import { HttpModule } from '@angular/http';

describe('HeroComponent', () => {
    let component: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [HeroService],
          declarations: [ HeroComponent ],
          imports: [HttpModule]
        });

        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
      });


    it('HeroComponent should be created', () => {
        expect(component).toBeDefined();
    });

    it('showFullInfo() should change showDetails (false -> true)', () => {
        expect(component.showDetails).toBe(false, 'off at first');
        component.showFullInfo();
        expect(component.showDetails).toBe(true, 'on after click on item');
    });
}); 