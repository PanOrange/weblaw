import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { articlesList } from "./articles-source";

enum ArticleRole {
  main = 'main',
  subArticle = 'sub-article',
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles$: Observable<any[]>;

  private articles = articlesList;

  constructor() {
    this.articles$ = of(this.articles);
  }

}
