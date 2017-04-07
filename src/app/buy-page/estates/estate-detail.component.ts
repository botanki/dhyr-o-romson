import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'estate-detail',
    templateUrl: './estate-detail.html',
    styleUrls: ['./estate-detail.css'],
    providers: [RestService, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class EstateDetailComponent  {

    estate = {};
    estates = {}
    location: Location;

    constructor(
      private restService: RestService,
      private route: ActivatedRoute,
      location: Location

    ){ this.location = location;}

    ngOnInit(){
      this.route.params.subscribe((routeParams:any)=>{
        let Estates = this.restService.newRestEntity("estates");
        Estates.find('').then((estates:any)=>{ 
          let id = routeParams.id;
          for(let currentEstates in estates){
            for(let estate of estates[currentEstates]){
              if(estate.id == id){
                this.estate = estate;
              }
            }
          }
        });
      });

    }

    backClicked() {
      this.location.back();
    }

}
