import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonResponse } from '../interface/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}
  getPekemon(name: string) {
    return this.http.get(
      [this.url, name].join('/')
    ) as Observable<PokemonResponse>;
  }

  getPokemon(name: string) {
    return this.http.get([this.url, name].join('/')).pipe(
      map((pokemonres: any) => {
        const pokemon = {
          id: pokemonres.id,
          height: pokemonres.height,
          weight: pokemonres.weight,
          sprites: pokemonres.sprites,
          spicies: pokemonres.spicies,
          types: pokemonres.types,
        };
        return pokemon;
      })
    ) as Observable<any>;
  }
}
