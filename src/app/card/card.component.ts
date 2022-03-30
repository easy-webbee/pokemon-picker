import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../interface/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('incard') cards!: Pokemon;
  constructor() {}

  ngOnInit(): void {}
}
