import { Component, OnInit } from '@angular/core';

import { RestService } from '../../services/rest.service';
import { MemService } from '../../services/mem.service';

@Component({
	selector: 'search',
	templateUrl: './search.html',
	styleUrls: [ './search.css' ],
	providers: [ RestService, MemService ]
})

export class SearchComponent implements OnInit {
    global: any;
	estate = [];

	searchPhrase = '';
	// searchFilters = {};
    searchFilters: any;

	constructor(
		private restService: RestService,
		private memService: MemService
	){

		this.global = this.memService.global();
		this.global.updateSearchFilters = (filters)=>{
			this.searchFilters = filters;
			this.searchFromForm();
		}
	}

	ngOnInit(){

	}

	filtersToMongo(){
		let s = this.searchFilters;
		let query = [
			isNaN(s.chosenArea.split(' ')[0]/1) ? undefined : {space: {$gte: s.chosenArea.split(' ')[0]/1}},
			isNaN(s.chosenRoom.split(' ')[0]/1) ? undefined : {rooms: {$gte: s.chosenRoom.split(' ')[0]/1}},
			isNaN(s.chosenPriceMin.split(' ')[0]/1) ? undefined : {price: {$gte: s.chosenPriceMin.split(' ')[0]/1}},
			isNaN(s.chosenPriceMax.split(' ')[0]/1) ? undefined : {price: {$lte: s.chosenPriceMax.split(' ')[0]/1}}
		];
		// Delete items that are undefined (no good number value)
		return query.filter(function(item){
			return item ? true : false;
		});
	}

	searchFromForm(){
		this.search(this.searchPhrase);
	}

	search(term: string): void {
        term = term.trim(); // ta bort spaces före/efter texten

      	let properties = {
            $or: [
                {area: {$regex: term, $options: "i"}},
                {address: {$regex: term, $options: "i"}}
            ],
            $and: this.filtersToMongo(),
            _fields: '',
            _skip: 0,
            _limit: 100
        };

        if(properties.$and.length === 0){
        	delete properties.$and;
        }

        let Estates = this.restService.newRestEntity("estate");

        //console.log(properties,"SENDING TO SERVER");
        Estates.find('find/' + JSON.stringify(properties)).then(
        	(data:any[]) => {
        		this.estate = data;
        		this.global.estateMasterUpdate(data);
        	}
       	);
    }
}
