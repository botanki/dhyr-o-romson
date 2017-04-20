import { Component } from '@angular/core';
import { MemService } from '../services/mem.service';

@Component({
	selector: 'about-us',
	templateUrl: './about-us.html',
	styleUrls: ['./about-us.css'],
	providers: [MemService]
})

export class AboutUsComponent  {

	constructor(
        private memService: MemService
    ){
        this.globalMem = this.memService.global();
    }

    closeNav(){
        this.isNavbarCollapsed = true;
    }
    
}
