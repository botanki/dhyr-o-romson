import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `

		<nav>
			<a routerLink="/front-page"
				routerLinkActive="active">Framsida</a>

			<a routerLink="/sell-page"
				routerLinkActive="active">Sälj</a>

			<a routerLink="/buy-page"
				routerLinkActive="active">Köp</a>

			<a routerLink="/about-us"
				routerLinkActive="active">Om oss</a>

			<a routerLink="/contact-us"
				routerLinkActive="active">Kontakta oss</a>
		</nav>

		<router-outlet></router-outlet>
	`,
	styleUrls: []
})

export class AppComponent  {
}
