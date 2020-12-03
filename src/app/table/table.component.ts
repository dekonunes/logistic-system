import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../Interface/pokemon';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];
 
  constructor() { }

  ngOnInit(): void { }

  reverse() {
    this.pokemons.reverse();
  }
}
