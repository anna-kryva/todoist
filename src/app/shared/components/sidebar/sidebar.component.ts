import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { SearchService } from '../../services/search/search.service';
import { Completed } from '../../interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit, OnInit { 
   @ViewChild('sidebar') public sidebar: MatSidenav;

   public done: boolean;
   public notdone: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidebarService: SidebarService,
    private searchService: SearchService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.done = true;
    this.notdone = true;

    const completed: Completed = {
      done: this.done,
      notdone: this.notdone
    }
    this.searchService.updateCompleted(completed);
  }

  ngAfterViewInit(): void {
    this.sidebarService.setSidebar(this.sidebar);
  }

  public filter(): void {
    const completed: Completed = {
      done: this.done,
      notdone: this.notdone
    }
    this.searchService.updateCompleted(completed);
  }
}
