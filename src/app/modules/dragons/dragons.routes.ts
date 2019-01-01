import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { CreateComponent } from './pages/create/create.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { SuccessComponent } from './pages/success/success.component';
import { DragonsResolver } from './dragons.resolver';

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
    component: SuccessComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
    resolve: {
      isCreate: DragonsResolver,
    },
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
    component: SuccessComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
    resolve: {
      isUpdate: DragonsResolver,
    },
  },
  {
    path: 'delete/:slug',
    component: DeleteComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
  },
  {
    path: 'delete-success',
    component: SuccessComponent,
    outlet: 'action',
    canActivate: [AuthGuard],
    resolve: {
      isDelete: DragonsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragonsRoutes { }
