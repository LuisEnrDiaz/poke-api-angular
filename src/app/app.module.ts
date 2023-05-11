import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PokeItemsComponent } from './components/poke-items/poke-items.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';
import { DecorationComponent } from './components/decoration/decoration.component';

@NgModule({
    declarations: [
        AppComponent,
        PokeItemsComponent,
        HeaderComponent,
        FilterPokemonPipe,
        DecorationComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
