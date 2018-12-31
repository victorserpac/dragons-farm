import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { CreateComponent } from './pages/create/create.component';
import { CreateSuccessComponent } from './pages/create-success/create-success.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { UpdateSuccessComponent } from './pages/update-success/update-success.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
    outlet: 'action',
  },
  {
    path: 'create-success',
    component: CreateSuccessComponent,
    outlet: 'action',
  },
  {
    path: 'view/:slug',
    component: ViewComponent,
    outlet: 'action',
  },
  {
    path: 'edit/:slug',
    component: EditComponent,
    outlet: 'action',
  },
  {
    path: 'update-success',
    component: UpdateSuccessComponent,
    outlet: 'action',
  },
  {
    path: 'delete/:slug',
    component: DeleteComponent,
    outlet: 'action',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragonsRoutes { }
