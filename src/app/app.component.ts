import { Component, OnInit } from '@angular/core';
import { Form, PokemonResponse } from './interface/pokemon';
import { PokemonService } from './service/pokemon.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SeletedComponent } from './seleted/seleted.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  starterPokemon = ['bulbasaur', 'squirtle', 'charmander'];
  cards: PokemonResponse[] = [];
  only: boolean = false;
  allPoke: Form[] = [];
  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((data: any) => {
      this.allPoke = data.results;
      console.log(this.allPoke);
      for (let poke of this.allPoke) {
        this.pokemonService
          .getEach(poke.url)
          .subscribe((data: PokemonResponse) => {
            this.cards.push(data);
          });
      }
    });
  }
  onClickcard(card: PokemonResponse) {
    const dialogRef = this.dialog.open(SeletedComponent, {
      width: '250px',
      height: '250px',
      data: { card: card, seleted: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result === true) {
        this.only = true;
        this.cards = this.cards.filter((data) => data === card);
      }
    });
  }
}
