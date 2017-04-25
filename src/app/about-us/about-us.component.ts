import { Component } from '@angular/core';
import { MemService } from '../services/mem.service';

@Component({
	selector: 'about-us',
	templateUrl: './about-us.html',
	styleUrls: ['./about-us.css'],
	providers: [MemService]
})

export class AboutUsComponent  {

	isNavbarCollapsed = true;
    isActive = false;
    globalMem: any;
    headline1 = "Om oss";
    headline2 = "Kontakt";
    maintext1 = "Hög servicenivå är det som särskiljer oss. Vi tror att förmågan att se hela kundens boendesituation är avgörande för en lyckad bostadsaffär. Vår styrka är att kunna hantera varje kunds unika behov, det är också det som gör jobbet som mäklare intressant. Hos Dhyr o Romson möter du kunskap och erfarenhet som omfattar allt från gårdar till bostadsrätter i stan, villor, tomter, fritidshus och nyproduktion. Vårt arbetssätt, där mäklarna samarbetar i team, ger dig ett försprång på marknaden. Hög servicenivå är det som särskiljer oss. Vi tror att förmågan att se hela kundens boendesituation är avgörande för en lyckad bostadsaffär. Vår styrka är att kunna hantera varje kunds unika behov, det är också det som gör jobbet som mäklare intressant. Hos Dhyr o Romson möter du kunskap och erfarenhet som omfattar allt från gårdar till bostadsrätter i stan, villor, tomter, fritidshus och nyproduktion. Vårt arbetssätt, där mäklarna samarbetar i team, ger dig ett försprång på marknaden.";
    maintext2 = "Vi tror att förmågan att se hela kundens boendesituation är avgörande för en lyckad bostadsaffär. Vår styrka är att kunna hantera varje kunds unika behov, det är också det som gör jobbet.";

	constructor(
        private memService: MemService
    ){
        this.globalMem = this.memService.global();
    }

    closeNav(){
        this.isNavbarCollapsed = true;
    }
    
}
