import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<navigation></navigation>
		<router-outlet></router-outlet>
        <footer></footer>
	`,
	styleUrls: []
})

export class AppComponent  {
}
