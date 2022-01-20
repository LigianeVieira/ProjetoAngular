import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CatsModule } from './cats/cats.module';
import { AnimalModule } from './animals/animals.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CatsModule,
    AnimalModule,


  ]
})
export class FeaturesModule { }
