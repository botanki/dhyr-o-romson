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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var mem_service_1 = require("../services/mem.service");
var NgbdModalBasic = (function () {
    function NgbdModalBasic(modalService, memService) {
        var _this = this;
        this.modalService = modalService;
        this.memService = memService;
        this.title = 'Kontakta oss';
        this.body = 'Vill du komma i kontakt med någon av våra mäklare, eller har du en annan fråga? Fyll i ditt ärende i kontaktformuläret så hör vi av oss till dig. Du kan även ringa oss på 08-55551300 mellan kl 8-20 alla dagar i veckan.';
        this.send = 'Skicka';
        this.cancel = 'Avbryt';
        this.globalMem = this.memService.global();
        this.globalMem.openModal = function () {
            _this.open();
        };
    }
    NgbdModalBasic.prototype.open = function () {
        var _this = this;
        this.modalService.open(this.content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function () { });
    };
    NgbdModalBasic.prototype.registerContent = function (content) {
        this.content = content;
    };
    return NgbdModalBasic;
}());
NgbdModalBasic = __decorate([
    core_1.Component({
        selector: 'modal',
        templateUrl: './modal.html',
        styleUrls: ['./modal.css'],
        providers: [mem_service_1.MemService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        mem_service_1.MemService])
], NgbdModalBasic);
exports.NgbdModalBasic = NgbdModalBasic;
//# sourceMappingURL=modal.component.js.map