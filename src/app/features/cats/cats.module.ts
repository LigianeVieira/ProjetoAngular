import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CatsRoutingModule,
    ReactiveFormsModule,
    CatsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  exports: [ListComponent],
})
export class CatsModule {}
