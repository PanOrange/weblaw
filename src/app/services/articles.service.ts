import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles$: Observable<any[]>;

  private articles = [
    { id: 1, number: 75, text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.', documentsCount: 4},
    { id: 1, number: 75.1, text: 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.', documentsCount: 6 },
    { id: 2, number: 75.2, text: 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.', documentsCount: 2 },
    { id: 3, number: 75.3, text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.', documentsCount: 4 },
    { id: 4, number: 75.4, text: 'lorem', documentsCount: 0 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
    { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
  ];

  constructor() {
    this.articles$ = of(this.articles);
  }

}
