import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModelComponent } from './card-model.component';



@NgModule({
  declarations: [
    CardModelComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CardModelComponent
  ],
  providers: [],
  bootstrap: [CardModelComponent]
})
export class CardModelModule { }
