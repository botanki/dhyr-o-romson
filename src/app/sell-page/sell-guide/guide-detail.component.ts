import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'guide-detail',
    templateUrl: './guide-detail.html',
    styleUrls: [ './guide-detail.css' ],
    providers: [ RestService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy } ]
})

export class GuideDetailComponent implements OnInit {

    guide = {};
    guides = {}
    location: Location;

    constructor(
      private restService: RestService,
      private route: ActivatedRoute,
      location: Location

    ) { this.location = location; }

    ngOnInit(){
      this.route.params.subscribe((routeParams:any)=>{
        let Guides = this.restService.newRestEntity("guides");
        Guides.find('').then((guides:any)=>{
          let id = routeParams.id;
          for(let currentGuides in guides){
            for(let guide of guides[currentGuides]){
              if(guide.id == id){
                this.guide = guide;
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
