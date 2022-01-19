import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CatsRoutingModule,
    ReactiveFormsModule,
    CatsRoutingModule,

  ],
  exports:[ListComponent]
})
export class CatsModule { }
