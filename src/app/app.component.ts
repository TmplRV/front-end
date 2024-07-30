import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass',
})
export class AppComponent {
	constructor(
		private matIconReg: MatIconRegistry,
		private observer: BreakpointObserver
	) {}

	@ViewChild(MatSidenav)
	sidenav!: MatSidenav;

	isMobile = true;
	isCollapsed = true;

	toggleMenu() {
		if (this.isMobile) {
			this.sidenav.toggle();
			this.isCollapsed = false; // On mobile, the menu can never be collapsed
		} else {
			this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
			this.isCollapsed = !this.isCollapsed;
		}
	}

	ngOnInit(): void {
		this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');

		this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
			if (screenSize.matches) {
				this.isMobile = true;
			} else {
				this.isMobile = false;
			}
		});
	}
}
