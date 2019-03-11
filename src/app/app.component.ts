import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>Bonjour{{pokemons}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Angular App!';
  private pokemons: Pokemon[];
  private value: string = null;
  values = '';

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  onKey(value: string) {
    this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez cliqué sur " + pokemon.name);
  }
}
