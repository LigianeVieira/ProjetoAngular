import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Cat } from 'src/app/core/model/cat';

import { CatService } from 'src/app/core/service/cat/cat.service';
import { ListComponent } from './list/list.component';

@Injectable()
export class CatDataResolver implements Resolve<Cat[]> {
  constructor(private catService: CatService) {}

  resolve(): Observable<Cat[]> {
    return this.catService.allCats();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
     entities: CatDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[CatDataResolver]
})
export class CatsRoutingModule { }
