import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  host: {'class': 'card shadow mb-4'}
})
export class CardComponent implements OnInit {

  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
