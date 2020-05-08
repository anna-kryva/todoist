import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/authorization/services/auth.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService,
    private router: Router
    ) { }

  public toggleSidebar(): void {
    this.sidebarService.toggle();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/authorization']);
  }
}
