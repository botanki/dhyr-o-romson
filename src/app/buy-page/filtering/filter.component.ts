import { Component } from '@angular/core';
import { MemService } from '../../services/mem.service';


@Component({
	selector: 'filter',
	templateUrl: './filter.html',
	styleUrls: ['./filter.css'],
	providers: [MemService]
})

export class FilterComponent {

	header = 'Filtera:';
	global: any;
	// Rum (min)
	title1 = 'Rum (min)'
	def1 = 'rum'
	chosenRoom:string = 'Rum (min)';
	roomOptions:number[] = [1,2,3,4,5,6];

	constructor(private memService: MemService){
		this.global = this.memService.global();
	}

	roomChoice(noOfRooms:number){
		if(noOfRooms === 0){
			this.chosenRoom = 'Rum (min)';
		}
		else {
			this.chosenRoom = noOfRooms + ' rum';
		}
		this.filterUpdate();
	}

	// Boarea (min)
	title2 = 'Boarea (min)'
	def2 = 'kvm'
	chosenArea:string = 'Boarea (min)';
	areaOptions:number[] = [25,50,75,100,125,150,175,200];

	areaChoice(noOfAreas:number){
		if(noOfAreas === 0){
			this.chosenArea = 'Boarea (min)';
		}
		else {
			this.chosenArea = noOfAreas + ' kvm';
		}
		this.filterUpdate();
	}

	//Pris (min)
	title3 = 'Pris (min)'
	def3 = 'kr'
	chosenPriceMin:string = 'Pris (min)';
	priceMinOptions:number[] = [500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];

	priceMinChoice(noOfPricesMin:number){
		if(noOfPricesMin === 0){
			this.chosenPriceMin = 'Pris (min)';
		}

		else {
			this.chosenPriceMin = noOfPricesMin + ' kr';
		}
		this.filterUpdate();
	}

	//Pris (max)
	title4 = 'Pris (max)'
	chosenPriceMax:string = 'Pris (max)';
	priceMaxOptions:number[] = [500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];

	priceMaxChoice(noOfPricesMax:number){
		if(noOfPricesMax === 0){
			this.chosenPriceMax = 'Pris (max)';
		}

		else {
			this.chosenPriceMax = noOfPricesMax + ' kr';
		}
		this.filterUpdate();
	}

	filterUpdate():any{
		let filters = {
			chosenRoom: this.chosenRoom,
			chosenArea: this.chosenArea,
			chosenPriceMin: this.chosenPriceMin,
			chosenPriceMax: this.chosenPriceMax
		}
		// New search
		this.global.updateSearchFilters(filters);
	}
}
