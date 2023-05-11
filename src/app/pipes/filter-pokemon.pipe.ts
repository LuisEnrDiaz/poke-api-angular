import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPokemon',
})
export class FilterPokemonPipe implements PipeTransform {
    transform(value: any, arg: any): any {
        const poke = [];

        for (const pokemon of value) {
            if (pokemon.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                poke.push(pokemon);
            }
        }
        return poke;
    }
}
