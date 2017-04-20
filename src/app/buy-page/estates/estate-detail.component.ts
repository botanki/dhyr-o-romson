import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { MemService } from '../../services/mem.service';

@Component({
    selector: 'estate-detail',
    templateUrl: './estate-detail.html',
    styleUrls: ['./estate-detail.css'],
    providers: [MemService, RestService, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class EstateDetailComponent  {

    estate = [];
    location: Location;
    globalMem: any;
    breadcrumbs = ['Hem', 'Köp Bostad']
    tags = [
      'Rum:',
      'rum och kök',
      'Boarea:',
      'kvm',
      'Byggnadsår:',
      'Föreslagen budstart:',
      'kr',
      'Nästa Visning:',
      'Anmäl Intresse',
      'Se fler bostäder',
      'Ansvarig Mäklare:',
      'Tel: ',
      'Kontakta:',
      'Tilllagd:'
      ]
    sale = "Såld";

    constructor(
      private restService: RestService,
      private route: ActivatedRoute,
      private memService: MemService,
      location: Location

    ){ this.location = location;
     this.globalMem = this.memService.global();
   }


    ngOnInit(){
      this.route.params.subscribe((routeParams:any)=>{
        let Estates = this.restService.newRestEntity("estate");
        Estates.find('').then((estates:any)=>{
          let id = routeParams.id;
          for(let estate in estates){
            for(let estate of estates){
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
