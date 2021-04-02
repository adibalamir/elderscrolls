import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getCards(page: number, value: string): Observable<any> {
    const cards = this.http.get(
      `https://api.elderscrollslegends.io/v1/cards?page=${page}&pageSize=10&name=${value}`
    ) as Observable<any>;

    return cards;
  }
}