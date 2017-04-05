import { Component } from '@angular/core';

@Component({
	selector: 'front-page',
	templateUrl: './front-page.html',
	styleUrls: [ './front-page.css' ]
})

export class FrontPageComponent  {
	backgroundImage = 'url(../images/headers/front.png)';

	slogan = 'De dyraste rummen...';

	buttons = {
		sell: 'Vill du sälja din bostad?',
		buy: 'Bostäder till salu'
	}
}
