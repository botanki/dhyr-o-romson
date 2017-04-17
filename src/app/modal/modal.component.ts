import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MemService } from '../services/mem.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
  providers: [MemService]
})
export class NgbdModalBasic {

  title = 'Kontakta oss';
  body = 'Vill du komma i kontakt med någon av våra mäklare, eller har du en annan fråga? Fyll i ditt ärende i kontaktformuläret så hör vi av oss till dig. Du kan även ringa oss på 08-55551300 mellan kl 8-20 alla dagar i veckan.';
  send = 'Skicka';
  cancel = 'Avbryt';
  closeResult: string;
  globalMem: any;
  content: any;

  constructor(
    private modalService: NgbModal,
    private memService: MemService
  ) {
    this.globalMem = this.memService.global();
    this.globalMem.openModal = ()=>{
      this.open();
    }
  }

  open() {
    this.modalService.open(this.content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    },()=>{});
  }

  registerContent(content: any){
    this.content = content;
  }
}
