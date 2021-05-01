import { Game } from './../shared/game';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteGameService {

  constructor(private http: HttpClient) { }

  delete(obj: Game){
    return this.http.put(environment.origin + '/deletar/games' , obj);
  }
}
