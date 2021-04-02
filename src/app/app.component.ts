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
  cards: Card[] | any = [];
  value: string = "";

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService
      .getCards(this.page, this.value)
      .subscribe(res => {
        this.cards = res.cards;
      });
  }

  onScroll(): void {
    this.cardService
      .getCards(++this.page, this.value)
      .subscribe(res => {
        this.cards.push(...res.cards);
      });
  }

  onChange(e: KeyboardEvent) {
    e.preventDefault();
    this.page = 1;

    if (e.keyCode >= 65 && e.keyCode <=90) {
      this.value += e.key;
    }

    if (e.key === "Backspace") {
      this.value = this.value.substring(0, this.value.length - 1);
    }

    if (e.key === "Delete") {
      this.value = "";
    }
    
    this.cardService
      .getCards(this.page, this.value)
      .subscribe(res => {
        this.cards = res.cards;
      })

    return true;
  }
}
