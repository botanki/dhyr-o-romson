import { Component } from '@angular/core';
import { MemService } from '../services/mem.service';

@Component({
	selector: 'navigation',
	templateUrl: './navigation.html',
	styleUrls: ['./navigation.css'],
    providers: [MemService]
})

export class NavigationComponent {
    isNavbarCollapsed = true;
    isActive = false;

    sections = [
        { text: 'Köp Bostad', route: 'buy-page' },
        { text: 'Sälj Bostad', route: 'sell-page' },
        { text: 'Om Oss', route: 'about-us' }
    ];   

    constructor(
        private memService: MemService
    ){
        this.globalMem = this.memService.global();
    }
}


import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MemService } from '../services/mem.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  providers: [MemService]
})
export class NgbdModalBasic {
  closeResult: string;
  globalMem: any;

  constructor(
    private modalService: NgbModal,
    private memService: MemService
  ) {
    this.globalMem = this.memService.global();
    this.globalMem.openModal = (content:any)=>{
      this.open(content);
    }
  }
