import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from '../Interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
    private pokemonUrl: string = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) { }

    getPokemons(term: string): Observable<any> {
        const pokemonsUrl = `${this.pokemonUrl}?${term.trim()}`;
        return this.http.get<any>(pokemonsUrl);
    }

    getPokemon(url: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(url);
    }

    concatPokemonTypes(types: any[]) {
        return types.map((type) => type.type.name).join(", ");
    }

    createPokemon(_pokemon: any) {
        return {
            ID: _pokemon.id,
            name: _pokemon.name,
            types: this.concatPokemonTypes(_pokemon.types),
                weight: _pokemon.weight,
                baseExperience: _pokemon.base_experience
        };
    }
}
