import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		MatSidenavModule,
		MatIconModule,
		MatButtonModule,
		SidenavComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
	constructor(private matIconReg: MatIconRegistry) {}

	ngOnInit(): void {
		this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
	}

	sidenavCollapsed = signal(false)
	sidenavWidth = computed(() => this.sidenavCollapsed() ? '70px' : '250px')
}
