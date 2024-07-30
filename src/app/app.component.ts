import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass',
})
export class AppComponent {
	constructor(private matIconReg: MatIconRegistry) {}

	ngOnInit(): void {
		this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
	}
}
