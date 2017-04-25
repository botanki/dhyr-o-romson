"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var mem_service_1 = require("../services/mem.service");
var AboutUsComponent = (function () {
    function AboutUsComponent(memService) {
        this.memService = memService;
        this.isNavbarCollapsed = true;
        this.isActive = false;
        this.headline1 = "Om oss";
        this.headline2 = "Kontakt";
        this.maintext1 = "Hög servicenivå är det som särskiljer oss. Vi tror att förmågan att se hela kundens boendesituation är avgörande för en lyckad bostadsaffär. Vår styrka är att kunna hantera varje kunds unika behov, det är också det som gör jobbet som mäklare intressant. Hos Dhyr o Romson möter du kunskap och erfarenhet som omfattar allt från gårdar till bostadsrätter i stan, villor, tomter, fritidshus och nyproduktion. Vårt arbetssätt, där mäklarna samarbetar i team, ger dig ett försprång på marknaden. Hög servicenivå är det som särskiljer oss. Vi tror att förmågan att se hela kundens boendesituation är avgörande för en lyckad bostadsaffär. Vår styrka är att kunna hantera varje kunds unika behov, det är också det som gör jobbet som mäklare intressant. Hos Dhyr o Romson möter du kunskap och erfarenhet som omfattar allt från gårdar till bostadsrätter i stan, villor, tomter, fritidshus och nyproduktion. Vårt arbetssätt, där mäklarna samarbetar i team, ger dig ett försprång på marknaden.";
        this.maintext2 = "Vi tror att förmågan att se hela kundens boendesituation är avgörande för en lyckad bostadsaffär. Vår styrka är att kunna hantera varje kunds unika behov, det är också det som gör jobbet.";
        this.globalMem = this.memService.global();
    }
    AboutUsComponent.prototype.closeNav = function () {
        this.isNavbarCollapsed = true;
    };
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    core_1.Component({
        selector: 'about-us',
        templateUrl: './about-us.html',
        styleUrls: ['./about-us.css'],
        providers: [mem_service_1.MemService]
    }),
    __metadata("design:paramtypes", [mem_service_1.MemService])
], AboutUsComponent);
exports.AboutUsComponent = AboutUsComponent;
//# sourceMappingURL=about-us.component.js.map