import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatsRoutingModule,
    ReactiveFormsModule,
    CatsRoutingModule,
    SharedModule,
  ]
})
export class CatsModule { }
