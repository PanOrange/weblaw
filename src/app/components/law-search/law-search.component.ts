import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-law-search',
  templateUrl: './law-search.component.html',
  styleUrls: ['./law-search.component.sass']
})
export class LawSearchComponent implements OnInit {
  public topGap: number = 64;

  constructor() { }

  ngOnInit(): void {
  }

}
