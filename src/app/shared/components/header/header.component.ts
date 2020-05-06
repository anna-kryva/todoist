import { Component, OnInit, Input } from '@angular/core';
// import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value: string = 'Clear me';

  constructor(private sidebar: SidebarService) { }

  ngOnInit(): void {
  }

  // toggleSidebar() {
  //   this.sidebar.toggle();
  // }

}
