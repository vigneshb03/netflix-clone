import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';


@NgModule({
  declarations: [
    HomeComponent,
    RecommendedMoviesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
