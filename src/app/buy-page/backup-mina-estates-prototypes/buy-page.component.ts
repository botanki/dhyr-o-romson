import { Component } from '@angular/core';

@Component({
	selector: 'buy-page',
	templateUrl: './buy-page.html',
	styleUrls: ['./buy-page.css']
})

export class BuyPageComponent  {
    address = 'Toftavägen 21';
    area = 'Malmö';
    
    backgroundImage = 'url(../images/headers/front.png)';

    slogan = 'De dyraste rummen...';

    
}
