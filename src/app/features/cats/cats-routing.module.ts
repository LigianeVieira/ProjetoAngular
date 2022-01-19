import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Cats } from 'src/app/core/model/cats';
import { CatService } from 'src/app/core/service/cat/cat.service';

@Injectable()
export class AnimalsDataResolver implements Resolve<Cats[]> {
  constructor(private catService: CatService) {}

  resolve(): Observable<Cats[]> {
    return this.catService.allCats();
  }
}

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
