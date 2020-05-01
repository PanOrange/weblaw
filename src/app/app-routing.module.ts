import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawSearchComponent } from "./components/law-search/law-search.component";
import { SearchResultsComponent } from "./components/search-results/search-results.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'law-search' },
  { path: 'law-search', component: LawSearchComponent },
  { path: 'search-results/:id', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
