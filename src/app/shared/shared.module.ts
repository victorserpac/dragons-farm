import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    IconComponent,
    ModalComponent,
  ],
})
export class SharedModule { }
