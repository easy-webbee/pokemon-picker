import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from './interface/pokemon';
import { PokemonService } from './service/pokemon.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SeletedComponent } from './seleted/seleted.component';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  starterPokemon = ['bulbasaur', 'squirtle', 'charmander'];
  cards: PokemonResponse[] = [];
  only: boolean = false;
  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    for (let namePoke of this.starterPokemon) {
      this.pokemonService
        .getPekemon(namePoke)
        .subscribe((data: PokemonResponse) => {
          this.cards.push(data);
          console.log(this.cards);
        });
    }
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
