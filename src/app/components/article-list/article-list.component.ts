import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {
  public articlesList: any[];

  private destroy$: Subject<null> = new Subject<null>();

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.articles$.pipe(takeUntil(this.destroy$)).subscribe(articles => {
      this.articlesList = articles;
    });
  }

}
