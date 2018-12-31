import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { CreateComponent } from './pages/create/create.component';
import { CreateSuccessComponent } from './pages/create-success/create-success.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { UpdateSuccessComponent } from './pages/update-success/update-success.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { DeleteSuccessComponent } from './pages/delete-success/delete-success.component';

const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreateComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
  {
    path: 'create-success',
    component: CreateSuccessComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
  {
    path: 'view/:slug',
    component: ViewComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:slug',
    component: EditComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
  {
    path: 'update-success',
    component: UpdateSuccessComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
  {
    path: 'delete/:slug',
    component: DeleteComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
  {
    path: 'delete-success',
    component: DeleteSuccessComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragonsRoutes { }
