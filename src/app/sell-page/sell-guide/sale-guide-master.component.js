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
var rest_service_1 = require("../../services/rest.service");
var SaleGuideMasterComponent = (function () {
    function SaleGuideMasterComponent(restService) {
        this.restService = restService;
        this.currentGuides = "SaleGuide";
        this.guides = {};
    }
    SaleGuideMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Guides = this.restService.newRestEntity("guides");
        Guides.find('').then(function (data) {
            _this.guides = data;
        });
    };
    return SaleGuideMasterComponent;
}());
SaleGuideMasterComponent = __decorate([
    core_1.Component({
        selector: 'sale-guide-master',
        templateUrl: './sale-guide-master.html',
        styleUrls: ['./sale-guide-master.css'],
        providers: [rest_service_1.RestService],
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService])
], SaleGuideMasterComponent);
exports.SaleGuideMasterComponent = SaleGuideMasterComponent;
//# sourceMappingURL=sale-guide-master.component.js.map