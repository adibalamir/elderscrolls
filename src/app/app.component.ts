import { Component, OnInit } from '@angular/core';
import { Card } from './card.model'
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'elderscrolls';
  throttle = 200;
  distance = 2;
  page = 1;
  cards: Card[] | any = [] ;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService
      .getCards(this.page)
      .subscribe(res => {
        this.cards = res.cards;
      });
  }

  onScroll(): void {
    this.cardService
      .getCards(++this.page)
      .subscribe(res => {
        this.cards.push(...res.cards);
      });
  }
}
