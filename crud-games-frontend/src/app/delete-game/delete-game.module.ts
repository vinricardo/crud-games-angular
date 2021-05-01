import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteGameComponent } from './delete-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DeleteGameComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DeleteGameComponent
  ]
})
export class DeleteGameModule { }
