import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';


@Component({
	selector: 'broker-master',
	templateUrl: './broker-master.html',
	styleUrls: ['./broker-master.css'],
  providers: [RestService],
})

export class BrokerMasterComponent  {

    brokers = [];
    _odd = false;

    tags = [
      'Ansvarig Mäklare:',
      'Tel: ',
      'Kontakta:'
      ]

    constructor(private restService: RestService){}

    ngOnInit(){
      let Brokers = this.restService.newRestEntity("broker");
      Brokers.find('').then((data:any)=>{
        this.brokers = data;
      });
    }

}
