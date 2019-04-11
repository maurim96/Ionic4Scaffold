import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  news: any[];
  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit() {
    this._newsService.getTopHeadlines().subscribe(res => {
      console.log(res);
      this.news = res.articles.filter(x => {
        if(x.urlToImage) {
          x.title = x.title.substring(0, x.title.indexOf('-'))
          return x
        }
      });
    })
  }

}
