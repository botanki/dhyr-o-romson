import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { MemService } from '../../services/mem.service';

@Component({
	selector: 'estate-master',
	templateUrl: './estate-master.html',
	styleUrls: ['./estate-master.css']
})

export class EstateMasterComponent implements OnInit {

    // SEARCH VARIABLES 
    searchHeader = 'Sök på bostadstyp, adress, område, ort, nyckelord';


    // FILTER VARIABLES

    filterHeader = 'Filtera:';

    title1 = 'Rum (min)'
    def1 = 'rum'
    chosenRoom:string = 'Rum (min)';
    roomOptions:number[] = [1,2,3,4,5,6];

    roomChoice(noOfRooms:number){
      if(noOfRooms === 0){
        this.chosenRoom = 'Rum (min)';
      }
      else {
        this.chosenRoom = noOfRooms + ' rum';
      }
    }

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
    }

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
    }

    title4 = 'Pris (max)'
    chosenPriceMax:string = 'Pris (max)';
    priceMaxOptions:number[] = [500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];

    priceMaxChoice(noOfPricesMax:number){
      if(noOfPricesMax === 0){
        this.chosenPriceMax = 'Pris (min)';
      }

      else {
        this.chosenPriceMax = noOfPricesMax + ' kr';
      }
    }

    // ESTATE-VIEW VARIABLES

    estates = [];
    localMem: any;

    sortHeader = 'Sortera Efter:';
    viewMode = '-date_added';
    dropdownTitle = 'Senaste inlagt';
    options = [
        { text: 'Senaste inlagt', sorting: '-date_added' },
        { text: 'Högst Pris', sorting: '-price' },
        { text: 'Lägst Pris', sorting: 'price' }
    ];

    saleTag = "Såld";
    tags = ['rum och kök', 'kvm', 'Budstart:', 'Inlagd den', 'Mer Info']


    constructor(
      private restService: RestService,
      private memService: MemService
    ){
      this.localMem = memService.get(this);
    }

    ngOnInit(){
      let Estates = this.restService.newRestEntity("estate");
      Estates.find('').then((data:any)=>{
        this.estates = data;
      });

    }

}
