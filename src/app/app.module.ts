import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { DragonsModule } from './modules/dragons/dragons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DragonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
