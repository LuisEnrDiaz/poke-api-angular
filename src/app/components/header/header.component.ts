import { Component, OnInit } from '@angular/core';
import { ServicePokeApi } from 'src/app/service/servicePokeApi';
import { PokemonsI } from 'src/app/types/typesPokemon';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    pokeFilter: string = '';

    apiResults: PokemonsI[] = [];
    count: number = 0;
    next: string | null = '';
    previous: string | null = '';
    pokemon: string = '';

    constructor(private servicePokeApi: ServicePokeApi) {}

    ngOnInit(): void {
        this.handleLoad();
    }

    handleLoad() {
        this.servicePokeApi.getInitialData().subscribe({
            next: (data) => {
                this.count = data.count;
                this.next = data.next;
                this.previous = data.previous;
                this.apiResults = data.results;
            },
        });
    }

    pokeData(name: string) {
        this.servicePokeApi.getPokemon(name).subscribe({
            next: (data) => {
                this.servicePokeApi.setPokemonName(data);
            },
        });
    }
}
