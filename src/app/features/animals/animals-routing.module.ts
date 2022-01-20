import { Injectable, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/core/model/animal';
import { AnimalService } from 'src/app/core/service/animal/animal.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class AnimalsDataResolver implements Resolve<Animal[]> {
  constructor(private animalService: AnimalService) {}

  resolve(): Observable<Animal[]> {
    return this.animalService.all();
  }
}

@Injectable()
export class AnimalDataResolver implements Resolve<Animal> {
  constructor(private animalService: AnimalService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Animal> {
    return this.animalService.getOne(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: AnimalsDataResolver,
    },
  },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: AnimalDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AnimalsDataResolver, AnimalDataResolver],
})
export class AnimalRoutingModule {}
