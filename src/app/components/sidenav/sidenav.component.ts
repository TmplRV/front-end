import { Component, Input, signal } from '@angular/core';
export type MenuItems = {
	icon: string;
	label: string;
	route?: string;
};

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.sass',
})
export class SidenavComponent {
	@Input({ required: true }) isCollapsed = signal(false);

	menuItems = signal<MenuItems[]>([
		{ icon: 'playing_cards', label: 'May mắn', route: 'luck' },
		{ icon: 'payments', label: 'Lộc tài', route: 'fortune' },
		{ icon: 'rewarded_ads', label: 'Công danh', route: 'fame' },
	]);
}
