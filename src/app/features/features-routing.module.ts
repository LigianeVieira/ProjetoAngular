import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { PermissionGuard } from '../core/guards/permission.guard';


const routes: Routes = [
  {path:'',
    redirectTo:'cats',
    pathMatch: 'full',
},
{
  path: 'cats',
  canActivate: [PermissionGuard],

  loadChildren: async () => import('./cats/cats.module').then((m) =>m.CatsModule),
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
