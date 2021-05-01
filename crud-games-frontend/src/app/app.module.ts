import { DeleteGameModule } from './delete-game/delete-game.module';
import { EditGameModule } from './edit-game/edit-game.module';
import { AddGameModule } from './add-game/add-game.module';
import { CardModelModule } from './card-model/card-model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModelModule,
    AddGameModule,
    EditGameModule,
    DeleteGameModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
