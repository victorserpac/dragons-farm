import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';

import { DragonsRoutes } from './dragons.routes';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { SharedModule } from '../../shared/shared.module';
import { DragonComponent } from './components/dragon/dragon.component';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [TimelineComponent, DragonComponent, CreateComponent],
  imports: [
    CommonModule,
    DragonsRoutes,
    SharedModule,
    OrderModule,
    FormsModule,
  ],
})
export class DragonsModule { }
