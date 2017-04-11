import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
	selector: 'guide-master',
	templateUrl: './guide-master.html',
	styleUrls: ['./guide-master.css'],
  	providers: [ RestService ],
})

export class GuideMasterComponent implements OnInit {

    currentGuides = "SaleGuide";
    guides = {};

    constructor(private restService: RestService){}

    ngOnInit(){
      let Guides = this.restService.newRestEntity("guides");
      Guides.find('').then((data:any)=>{
        this.guides = data;
      });
    }
}