import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './services/hero.service';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
