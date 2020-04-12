import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-law-search',
  templateUrl: './law-search.component.html',
  styleUrls: ['./law-search.component.sass']
})
export class LawSearchComponent implements OnInit {
  public topGap: number = 64;

  public filterControl: FormControl;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.filterControl = new FormControl('');
  }

  public applyFilter(): void {
    this.articlesService.applyFilter$.next(this.filterControl.value);
  }
}
