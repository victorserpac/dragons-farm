import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    IconComponent,
  ],
})
export class SharedModule { }
