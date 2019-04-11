import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
      private _httpClient: HttpClient
  ) { }

  getTopHeadlines() : Observable<any> {
    return this._httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7d4f94268a20461684befca027eedd99');
  }
}
