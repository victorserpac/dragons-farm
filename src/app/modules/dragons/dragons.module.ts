import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AuthGuard } from '../../core/guards';
import { DragonsRoutes } from './dragons.routes';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { DragonComponent } from './components/dragon/dragon.component';
import { CreateComponent } from './pages/create/create.component';
import { CreateSuccessComponent } from './pages/create-success/create-success.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { UpdateSuccessComponent } from './pages/update-success/update-success.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { DeleteSuccessComponent } from './pages/delete-success/delete-success.component';
import { DragonScenarioComponent } from './components/dragon-scenario/dragon-scenario.component';

@NgModule({
  declarations: [
    TimelineComponent,
    DragonComponent,
    CreateComponent,
    CreateSuccessComponent,
    ViewComponent,
    EditComponent,
    UpdateSuccessComponent,
    DeleteComponent,
    DeleteSuccessComponent,
    DragonScenarioComponent,
  ],
  imports: [
    CommonModule,
    DragonsRoutes,
    SharedModule,
    OrderModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
  ]
})
export class DragonsModule { }
