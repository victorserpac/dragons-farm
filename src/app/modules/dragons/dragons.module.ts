import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ],
})
export class DragonsModule { }
