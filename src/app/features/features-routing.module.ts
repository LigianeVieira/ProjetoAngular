import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { PermissionGuard } from '../core/guards/permission.guard';


const routes: Routes = [
  {path:'',
    redirectTo:'cat',
    pathMatch: 'full',
},
{
  path: 'cat',
  canActivate: [PermissionGuard],
  loadChildren: async () => import('./cats/cats.module').then((m) =>m.CatsModule),
},
{
path: 'animals',
canActivate: [PermissionGuard],
loadChildren: async () => import('./animals/animals.module').then((m) =>m.AnimalModule),
},
  {
    path:"**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
