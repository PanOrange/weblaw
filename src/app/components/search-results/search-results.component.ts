import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {
  activeArticle: string = '111';
  displayedColumns = ['link', 'note1', 'note2', 'note3', 'note4', 'note5', 'note6', 'note7'];
  dataSource: any[] = [
    { link: 'Документ 1', note1: '104', note2: '', note3: '', note4: '', note5: '', note6: '', note7: '' },
    { link: 'Документ 2', note1: '104', note2: '103', note3: '108', note4: '222', note5: '222', note6: '222', note7: '222' },
    { link: 'Документ 3', note1: '104', note2: '101', note3: '', note4: '', note5: '', note6: '', note7: '' },
    { link: 'Документ 4', note1: '104', note2: '19', note3: '', note4: '', note5: '', note6: '', note7: '' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
