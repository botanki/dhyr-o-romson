import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { MemService } from '../../services/mem.service';

@Component({
	selector: 'estate-master',
	templateUrl: './estate-master.html',
	styleUrls: ['./estate-master.css'],
  providers: [RestService, MemService],
})

export class EstateMasterComponent implements OnInit {

    currentEstates = "OnSale";
    localMem: any;
    estates = {};

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

    estateCategories(){
      return Object.keys(this.estates);
    }

    chooseCategory(category: string){
      this.localMem.chosenCategory = category;
    }

}