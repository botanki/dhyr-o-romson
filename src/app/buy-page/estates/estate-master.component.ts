import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { MemService } from '../../services/mem.service';
import { Estate } from '../../classes/estate';

@Component({
	selector: 'estate-master',
	templateUrl: './estate-master.html',
	styleUrls: ['./estate-master.css']
})

export class EstateMasterComponent implements OnInit {
    
    currentEstates = "OnSale";
    estates = {};
    localMem: any;

    sortHeader = 'Sortera Efter:';
    viewMode = '-date_added';
    dropdownTitle = 'Senaste inlagt';
    options = [
        { text: 'Nyaste', sorting: '-date_added' },
        { text: 'Högst Pris', sorting: '-price' },
        { text: 'Lägst Pris', sorting: 'price' }
    ];


    constructor(
      private restService: RestService,
      private memService: MemService
    ){
      this.localMem = memService.get(this);
    }

    ngOnInit(){
      let Estates = this.restService.newRestEntity("estates");
      Estates.find('').then((data:any)=>{
        this.estates = data;
      });

    }

}