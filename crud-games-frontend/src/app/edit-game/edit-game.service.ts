import { Game } from './../shared/game';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditGameService {

  constructor(private http: HttpClient) { }

  put(obj:Game){
    return this.http.put(environment.origin+'/games',obj)
  }
}
