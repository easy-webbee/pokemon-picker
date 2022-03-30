import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonResponse } from '../interface/pokemon';

@Component({
  selector: 'app-seleted',
  templateUrl: './seleted.component.html',
  styleUrls: ['./seleted.component.css'],
})
export class SeletedComponent implements OnInit {
  card!: PokemonResponse;
  constructor(
    public dialogRef: MatDialogRef<SeletedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {card:PokemonResponse, seleted:boolean}
  ) {}

  ngOnInit(): void {
    this.card = this.data.card;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
