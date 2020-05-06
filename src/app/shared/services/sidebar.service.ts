import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidebarService {
	private sidebar: MatSidenav;

	public setSidebar(sidebar: MatSidenav) {
		this.sidebar = sidebar;
	}

	public open() {
		return this.sidebar.open();
	}


	public close() {
		return this.sidebar.close();
	}

	public toggle(): void {
		this.sidebar.toggle();
	}
}