import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
	selector: 'estate-master',
	templateUrl: './estate-master.html',
	styleUrls: ['./estate-master.css'],
    providers: [RestService]
})

export class EstateMasterComponent  {

    currentEstates = "OnSale";
    estates = {};

    constructor(private restService: RestService){}

    ngOnInit(){
      let Estates = this.restService.newRestEntity("estates");
      Estates.find('').then((data:any)=>{
        this.estates = data;
      });
    }
}