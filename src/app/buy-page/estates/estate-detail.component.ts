import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'estate-detail',
    templateUrl: './estate-detail.html',
    styleUrls: ['./estate-detail.css'],
    providers: [RestService]
})

export class EstateDetailComponent  {

    estate = {};

    constructor(
      private restService: RestService,
      private route: ActivatedRoute

    ){}

    ngOnInit(){
      
      this.route.params.subscribe((routeParams:any)=>{

        let Estates = this.restService.newRestEntity("estates");
        Estates.find('').then((estates:any)=>{ 
          let name = routeParams.name;
          for(let category in estates){
            for(let estate of estates[category]){
              if(estate.name == name){
                this.estate = estate;
              }
            }
          }
        });
      });

    }
}
