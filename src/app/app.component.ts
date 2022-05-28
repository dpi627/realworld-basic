import { ArticlesService } from './articles.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';
  // list!: any[];

get list() {
  return this.articlesService.lstArticles;
}

  constructor(private articlesService: ArticlesService) {
    //this.list = this.articlesService.lstArticles;
  }

  searchArticles(keyowrd: string) {
    this.articlesService.searchArticles(keyowrd);
  }
}
