import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AnimalsCatComponent } from './animals-cat/animals-cat.component';
import { AnimalComponent } from './animal/animal.component';



@NgModule({
  declarations: [AnimalsCatComponent, AnimalComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
