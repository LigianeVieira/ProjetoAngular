import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GuardsComponent } from './guards/permission.guard';
import { AnimalsComponent } from './service/animals/animals.component';
import { CatsComponent } from './service/cats/cats.component';



@NgModule({
  declarations: [PageNotFoundComponent, GuardsComponent, AnimalsComponent, CatsComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
