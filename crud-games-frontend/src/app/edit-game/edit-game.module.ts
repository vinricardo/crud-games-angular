import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditGameComponent } from './edit-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [EditGameComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EditGameComponent
  ]
})
export class EditGameModule { }
