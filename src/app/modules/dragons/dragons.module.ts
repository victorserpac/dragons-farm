import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';

import { DragonsRoutes } from './dragons.routes';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { SharedModule } from '../../shared/shared.module';
import { DragonComponent } from './components/dragon/dragon.component';

@NgModule({
  declarations: [TimelineComponent, DragonComponent],
  imports: [
    CommonModule,
    DragonsRoutes,
    SharedModule,
    OrderModule,
  ],
})
export class DragonsModule { }
