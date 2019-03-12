import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'list-pokemon',
    templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {
    private pokemons: Pokemon[];

    constructor(private router: Router, private pokemonsService: PokemonsService) { }

    ngOnInit() {
        this.pokemons = this.pokemonsService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon) {
        let link = ['/pokemon', pokemon.id]
        this.router.navigate(link);
    }
}
