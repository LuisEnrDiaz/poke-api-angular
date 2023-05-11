import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { InitialDataI, PokemonI } from '../types/typesPokemon';

const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class ServicePokeApi {
    private url = 'https://pokeapi.co/api/v2/pokemon';
    private initialState: PokemonI = {
        id: 0,
        name: '',
        sprites: { front_default: '', back_default: '' },
        stats: [
            {
                base_stat: 0,
                stat: {
                    name: '',
                },
            },
        ],
    };
    private pokemonName$: BehaviorSubject<PokemonI>;

    constructor(private http: HttpClient) {
        this.pokemonName$ = new BehaviorSubject(this.initialState);
    }

    getInitialData(): Observable<InitialDataI> {
        return this.http.get<InitialDataI>(
            `${this.url}?limit=100000&offset=0`,
            httpOptions
        );
    }

    getPokemon(name: string): Observable<PokemonI> {
        return this.http.get<PokemonI>(`${this.url}/${name}`, httpOptions);
    }

    setPokemonName(pokemonName: PokemonI) {
        this.pokemonName$.next(pokemonName);
    }

    getPokemonName() {
        return this.pokemonName$;
    }
}
