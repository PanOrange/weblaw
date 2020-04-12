import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable, of } from "rxjs";
import { articlesList } from "./articles-source";
import { map } from "rxjs/operators";
import { Article } from "../interfaces/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles$: Observable<Article[]>;
  public applyFilter$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private articles = articlesList;

  constructor() {

    this.articles$ = combineLatest([
      of(this.articles),
      this.applyFilter$,
    ]).pipe(
      map(([articles, filterString]) => articles.filter((article: Article) => String(article.number).includes(filterString)))
    );
  }

}
