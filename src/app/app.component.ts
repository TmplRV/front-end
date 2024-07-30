import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, signal, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app',
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
	isCollapsed = signal(false);

	toggleMenu() {
		if (this.isMobile) {
			this.sidenav.toggle();
			this.isCollapsed.set(false);
		} else {
			this.isCollapsed.set(!this.isCollapsed());
		}
	}

	ngOnInit(): void {
		this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');

		this.observer.observe(['(max-width: 1000px)']).subscribe((screenSize) => {
			if (screenSize.matches) {
				this.isMobile = true;
			} else {
				this.isMobile = false;
			}
		});
	}
}
