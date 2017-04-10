import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<modal></modal>
		<navigation></navigation>
	    <router-outlet></router-outlet>
        <footer></footer>
	`,
	styleUrls: ['./app.css']
})

export class AppComponent  {
}
