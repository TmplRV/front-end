import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FortuneComponent } from './pages/fortune/fortune.component';
import { FameComponent } from './pages/fame/fame.component';
import { LuckComponent } from './pages/luck/luck.component';
import { UserComponent } from './pages/user/user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MapComponent } from './components/map/map.component';

@NgModule({
	declarations: [
		AppComponent,
		FortuneComponent,
		FameComponent,
		LuckComponent,
		UserComponent,
		SidenavComponent,
		MapComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
	],
	providers: [provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
