import { DeleteGameService } from './delete-game.service';
import { CardModelService } from './../card-model/card-model.service';
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
  games;
  constructor(private formBuilder: FormBuilder, private cardModelService: CardModelService, private deleteGameService: DeleteGameService) { }

  ngOnInit(): void {
    this.createForm()
    this.cardModelService.get().subscribe(g => this.games = g);
  }

  createForm(){
    this.formThree = this.formBuilder.group({
      title: [null, Validators.required]
    })
  }

  deleteGame(){
    const title = this.formThree.get('title').value;
    for(let game of this.games){
      if(game.title == title){
        this.deleteGameService.delete(game).subscribe();
      }
    }
   this.formThree.reset();
   window.location.reload();
  }

}
