import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Interface/pokemon';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  pokemons: Pokemon[] = []; 
  constructor(private pokemonsvc: PokemonService) { }

  ngOnInit(): void {
    this.pokemonsvc.getPokemons('limit=10')
      .subscribe((pokemons) => 
        pokemons.results.map((pokemon: any) =>
          this.getPokemon(pokemon.url)));
  }

  getPokemon(url: string) {
    this.pokemonsvc.getPokemon(url)
      .subscribe((_pokemon: any) => 
        this.pokemons.push({
          ID: _pokemon.id,
          name: _pokemon.name,
          types: this.concatPokemonTypes(_pokemon.types),
	        weight: _pokemon.weight,
	        baseExperience: _pokemon.base_experience
        }));
  }

  concatPokemonTypes(types: any[]) {
    return types.map((type) => type.type.name).join(", ");
  }

}
