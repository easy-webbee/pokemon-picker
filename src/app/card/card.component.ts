import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponse } from '../interface/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('incard') cards!: PokemonResponse;
  constructor() {}

  ngOnInit(): void {}
}
