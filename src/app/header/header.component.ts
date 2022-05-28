import { ArticlesService } from './../articles.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() keywordChange = new EventEmitter<string>(); //define Ouput event

  keyword = '';
  isHighlight = false;
  fontSize = 1; //rem
  isShowHint = false;
  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {}

  search($event: MouseEvent): void {
    // console.log($event);
    // this.isHighlight=!this.isHighlight;
    // ++this.fontSize;
    this.isShowHint = this.keyword === '';
    this.articlesService.searchArticles(this.keyword);
  }

  chkKeyword($event: KeyboardEvent): void {
    // console.log($event);
    this.isShowHint = this.isShowHint ? false : this.isShowHint;
  }
}
