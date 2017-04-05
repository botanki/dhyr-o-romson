import { Component } from '@angular/core';

@Component({
	selector: 'navigation',
	templateUrl: './navigation.html',
	styleUrls: ['./navigation.css']
})

export class NavigationComponent {
    isNavbarCollapsed = true;
    isActive = false;

    sections = [
    { text: 'Köp Bostad', route: 'buy-page'; },
    { text: 'Sälj Bostad', route: 'sell-page'; },
    { text: 'Om Oss', route: 'about-us'; },
    ];

    
}
