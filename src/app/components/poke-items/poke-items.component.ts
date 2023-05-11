import { Component, OnInit } from '@angular/core';
import { ServicePokeApi } from 'src/app/service/servicePokeApi';
import { PokemonI } from 'src/app/types/typesPokemon';

@Component({
    selector: 'app-poke-items',
    templateUrl: './poke-items.component.html',
    styleUrls: [],
})
export class PokeItemsComponent implements OnInit {
    pokeData: PokemonI | undefined;

    constructor(private servicePokeApi: ServicePokeApi) {}

    ngOnInit(): void {
        this.selectPokemon();
    }

    selectPokemon() {
        this.servicePokeApi.getPokemonName().subscribe((data) => {
            this.pokeData = data;
            return this.pokeData;
        });
    }
}
