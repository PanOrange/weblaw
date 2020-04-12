import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseLayoutComponent } from "../components/base-layout/base-layout.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { LawSearchComponent } from '../components/law-search/law-search.component';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { ArticleListComponent } from '../components/article-list/article-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [BaseLayoutComponent, LawSearchComponent, SearchResultsComponent, ArticleListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [BaseLayoutComponent, LawSearchComponent, SearchResultsComponent]
})
export class SharedModule { }
