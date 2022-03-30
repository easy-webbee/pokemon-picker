import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }
  getPekemon(name: string){
    return this.http.get([this.url,name].join('/')) as Observable<PokemonResponse>;
  }
}
