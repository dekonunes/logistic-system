import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '../Interface/pokemon';
import { PokemonService } from '../shared/pokemon.service';
import { increment, decrement } from '../store/actions/pagination.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pagination: number = 0;
  pokemons: Pokemon[] = [];

  constructor(private pokemonsvc: PokemonService, private store: Store<{ pagination: number }>) { 
    store.select('pagination').subscribe((pagination) => this.pagination = pagination);
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonsvc.getPokemons(`limit=10&offset=${this.pagination}`)
      .subscribe((pokemons) => 
        pokemons.results.map((pokemon: any) => 
          this.pokemonsvc.getPokemon(pokemon.url)
            .subscribe((poke) => {
              this.pokemons.push(this.pokemonsvc.createPokemon(poke))
              this.pokemons.sort((a: Pokemon, b: Pokemon) => Number(a.ID) - Number(b.ID));
            })));
  }

  incrementPokemons() {
    this.store.dispatch(increment());
    this.pokemons = [];
    this.getPokemons();
  }
 
  decrementPokemons() {
    this.store.dispatch(decrement());
    this.pokemons = [];
    this.getPokemons();
  }
}
