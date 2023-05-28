import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    LandingPageComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule ,

  ],


})
export class HomeModule { }
