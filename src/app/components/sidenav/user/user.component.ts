import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user.component.html',
	styleUrl: './user.component.sass',
})
export class UserComponent {
	@Input({ required: true }) isCollapsed = signal(false);

	paddingTop = computed(() => this.isCollapsed() ? '10px' : '25px')
}
