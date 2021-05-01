import { Component, Input, OnInit } from '@angular/core';

export interface GameInfo {
  title: String,
  rating: number,
  genre: String
}

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {
  @Input() config: GameInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
