import { Component } from '@angular/core';

@Component({
	selector: 'sort',
	templateUrl: './sort.html',
	styleUrls: ['./sort.css']
})

export class SortComponent {
	// Nyast
	chosenOption:string = 'Nyast';
	sortOptions:string[] = ["Högst Pris", "Lägst Pris"];

	sortChoice(noOfOptions:number){
		if(noOfOptions === 0){
			this.chosenOption = 'Nyast';
		}
		else {
			this.chosenOption = noOfOptions;
		}
	}
}