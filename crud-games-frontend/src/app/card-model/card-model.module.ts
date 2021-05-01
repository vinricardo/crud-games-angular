import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModelComponent } from './card-model.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CardModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    CardModelComponent
  ],
  providers: [],
  bootstrap: [CardModelComponent]
})
export class CardModelModule { }
