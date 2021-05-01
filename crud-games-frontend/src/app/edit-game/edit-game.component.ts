import { EditGameService } from './edit-game.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from '../shared/game';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

  formTwo: FormGroup;
  constructor(private formBuilder: FormBuilder, private editGameService: EditGameService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.formTwo = this.formBuilder.group({
      title: [null, Validators.required],
      newTitle: [null, Validators.required],
      rating: [null, Validators.required],
      genre: [null, Validators.required]
    })
  }

  editGame(){
    const title = this.formTwo.get('title').value;
    const newTitle = this.formTwo.get('newTitle').value;
    const rating = this.formTwo.get('rating').value;
    const genre = this.formTwo.get('genre').value;

    const game: Game = {
      title: title,
      newTitle: newTitle,
      rating: rating,
      genre: genre
    }
   this.editGameService.put(game).subscribe();
   this.formTwo.reset();
   window.location.reload();
  }

}
