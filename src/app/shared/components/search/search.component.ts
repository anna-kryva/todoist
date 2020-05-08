import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchStr: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchStr = "";
    this.searchService.updateSearch(this.searchStr);
  }

  public search() {
    this.searchService.updateSearch(this.searchStr);
  }

}
