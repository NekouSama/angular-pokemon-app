import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { FormsModule } from '@angular/forms';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './boder-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color';
import { PokemonsService } from './pokemons.service';
import { PokemonFormComponent } from './pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonSearchComponent } from './search-pokemon.component';
import { LoaderComponent } from '../loader.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonSearchComponent,
        LoaderComponent
    ],
    providers: [PokemonsService]
})
export class PokemonsModule { }