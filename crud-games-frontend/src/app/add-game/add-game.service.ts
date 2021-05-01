import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game } from '../shared/game';

@Injectable({
  providedIn: 'root'
})
export class AddGameService {

  constructor(private http: HttpClient) { }

  post(obj:Game){
    return this.http.post(environment.origin+'/games',obj);
  }

}
