import { Component } from '@angular/core';
import { MemService } from '../services/mem.service';

@Component({
	selector: 'navigation',
	templateUrl: './navigation.html',
	styleUrls: ['./navigation.css'],
    providers: [MemService]
})

export class NavigationComponent {
    isNavbarCollapsed = true;
    isActive = false;
    globalMem: any;

    sections = [
        { text: 'Köp Bostad', route: 'buy-page' },
        { text: 'Sälj Bostad', route: 'guide/1' },
        { text: 'Om Oss', route: 'about-us' }
    ];

    constructor(
        private memService: MemService
    ){
        this.globalMem = this.memService.global();
    }
}
