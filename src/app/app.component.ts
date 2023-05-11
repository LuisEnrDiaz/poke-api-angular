import { Component, OnInit } from '@angular/core';
import { ServicePokeApi } from 'src/app/service/servicePokeApi';
import { PokemonsI } from 'src/app/types/typesPokemon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [],
})
export class AppComponent {
    // apiResults: PokemonsI[] = [];
    // count: number = 0;
    // next: string | null = '';
    // previous: string | null = '';
    // pokemon: string = '';
    // frontImage: string = '';
    // backImage: string = '';
    // constructor(private servicePokeApi: ServicePokeApi) {}
    // ngOnInit(): void {
    //     this.handleLoad();
    // }
    // handleLoad() {
    //     this.servicePokeApi.getInitialData().subscribe({
    //         next: (data) => {
    //             this.count = data.count;
    //             this.next = data.next;
    //             this.previous = data.previous;
    //             this.apiResults = data.results;
    //         },
    //     });
    // }
}
