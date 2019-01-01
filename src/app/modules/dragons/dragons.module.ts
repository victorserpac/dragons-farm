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
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { DragonScenarioComponent } from './components/dragon-scenario/dragon-scenario.component';
import { SuccessComponent } from './pages/success/success.component';
import { DragonsResolver } from './dragons.resolver';

@NgModule({
  declarations: [
    TimelineComponent,
    DragonComponent,
    CreateComponent,    
    ViewComponent,
    EditComponent,
    DeleteComponent,
    DragonScenarioComponent,
    SuccessComponent,
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
    DragonsResolver,
  ]
})
export class DragonsModule { }
