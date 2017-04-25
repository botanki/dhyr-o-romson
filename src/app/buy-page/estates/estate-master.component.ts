import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { MemService } from '../../services/mem.service';

@Component({
	selector: 'estate-master',
	templateUrl: './estate-master.html',
	styleUrls: ['./estate-master.css']
})

export class EstateMasterComponent implements OnInit {

    estates = [];
    localMem: any;

    sortHeader = 'Sortera Efter:';
    viewMode = '-date_added';
    dropdownTitle = 'Senaste inlagt';
    options = [
        { text: 'Senaste inlagt', sorting: '-date_added' },
        { text: 'Högst Pris', sorting: '-price' },
        { text: 'Lägst Pris', sorting: 'price' }
    ];

    saleTag = "Såld";
    tags = ['rum och kök', 'kvm', 'Budstart:', 'Inlagd den', 'Mer Info']


    constructor(
      private restService: RestService,
      private memService: MemService
    ){
      this.localMem = memService.get(this);

      // Set sort option when we "return" to this page
      this.dropdownTitle = this.localMem.currentSortOptionLabel || 'Senaste inlagt';
      this.viewMode = this.localMem.currentSortOption || '-date_added';
    }

    ngOnInit(){
      let Estates = this.restService.newRestEntity("estate");
      Estates.find('').then((data:any)=>{
        this.estates = data;
      });

    }

    saveSortOption(label,choice){
      this.localMem.currentSortOptionLabel = label;
      this.localMem.currentSortOption = choice;
    }

}
