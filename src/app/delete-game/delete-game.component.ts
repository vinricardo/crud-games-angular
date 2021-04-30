import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from '../shared/game';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.scss']
})
export class DeleteGameComponent implements OnInit {

  formThree: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.formThree = this.formBuilder.group({
      title: [null, Validators.required]
    })
  }

  addGame(){
    const title = this.formThree.get('title').value;

    console.log(title)
   this.formThree.reset();
  }

}
