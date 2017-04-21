import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'guide-pager',
    templateUrl: './guide-pager.html',
    styleUrls: ['./guide-pager.css'],
      providers: [ RestService ],
})

export class GuidePagerComponent implements OnInit {
    title = 'Vår SäljGuide';
    viewMode = 'id';
    guides = [];

    constructor(private restService: RestService){}

    ngOnInit(){
      let Guides = this.restService.newRestEntity("guide");
      Guides.find('').then((data:any)=>{
        this.guides = data;
      });
    }
}
