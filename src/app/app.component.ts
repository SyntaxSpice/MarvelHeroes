import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dataIsAvailable: boolean = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(){
    this.heroService.getAllHeroes().subscribe(() => this.dataIsAvailable = true);    
  }

}
