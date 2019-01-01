import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
    ModalComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    IconComponent,
    ModalComponent,
    LoadingComponent,
  ],
})
export class SharedModule { }
