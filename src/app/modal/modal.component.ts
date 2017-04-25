import {Component} from '@angular/core';
import { FormsModule }  from '@angular/forms'; // <-- NgModel lives here

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MemService } from '../services/mem.service';
import {Http} from "@angular/http";

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
  providers: [MemService]
})
export class NgbdModalBasic implements OnChanges {

  disableSubmit = true;
  formdata = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    errand: ''
  };
  title = 'Kontakta oss';
  body = 'Vill du komma i kontakt med någon av våra mäklare, eller har du en annan fråga? Fyll i ditt ärende i kontaktformuläret så hör vi av oss till dig. Du kan även ringa oss på 08-55551300 mellan kl 8-20 alla dagar i veckan.';
  send = 'Skicka';
  cancel = 'Avbryt';
  closeResult: string;
  globalMem: any;
  content: any;
  sent: any;

  constructor(
    private modalService: NgbModal,
    private memService: MemService,
    private http: Http
  ) {
    this.globalMem = this.memService.global();
    this.globalMem.openModal = ()=>{
      this.open();
    }
  }

  open() {
    this.resetFormData();
    this.modalService.open(this.content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    },()=>{});
  }

  registerContent(content: any){
    this.content = content;
  }

  ngOnChanges() {
    console.log(this.formdata,"CHanges");
    // changes.prop contains the old and the new value...
  }

  sendContactInfo(){

      // Send
      let _observable = this.http.post("/register-contact-info", this.formdata);
      _observable.subscribe();

  }

  resetFormData(){
    for(let key in this.formdata){
      this.formdata[key] = '';
    }
  }

  checkFields(){
    let everyThingFilledIn = true;
    for(let key in this.formdata){
      if(key == "phonenumber"){continue;}
      everyThingFilledIn = everyThingFilledIn && this.formdata[key] !== '';
    }
    this.disableSubmit = !everyThingFilledIn;
  }

}
