import { CardModelService } from './card-model/card-model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  slides;
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

 a= {title: 'Teste', rating: 25}

  constructor(private cardService: CardModelService){}

  ngOnInit(){
    this.cardService.get().subscribe(g => {this.slides = g})
  }

}
