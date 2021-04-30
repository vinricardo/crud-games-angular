import { CardModelModule } from './card-model/card-model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModelComponent } from './card-model/card-model.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
