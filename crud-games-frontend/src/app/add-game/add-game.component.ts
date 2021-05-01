import { AddGameService } from './add-game.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from '../shared/game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private addGameService: AddGameService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      rating: [null, Validators.required],
      genre: [null, Validators.required]
    })
  }

  addGame(){
    const title = this.form.get('title').value;
    const rating = this.form.get('rating').value;
    const genre = this.form.get('genre').value;

    const game: Game = {
      title: title,
      newTitle: '',
      rating: rating,
      genre: genre
    }
   this.addGameService.post(game).subscribe();
   this.form.reset();
   window.location.reload();
  }

}
