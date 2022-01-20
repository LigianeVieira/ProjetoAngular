import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animals-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import{ MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [ListComponent, FormComponent,],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,


  ]
})
export class AnimalModule { }
