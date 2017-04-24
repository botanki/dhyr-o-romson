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
var mem_service_1 = require("../../services/mem.service");
var EstateMasterComponent = (function () {
    function EstateMasterComponent(restService, memService) {
        this.restService = restService;
        this.memService = memService;
        // SEARCH VARIABLES 
        this.searchHeader = 'Sök på bostadstyp, adress, område, ort, nyckelord';
        // FILTER VARIABLES
        this.filterHeader = 'Filtera:';
        this.title1 = 'Rum (min)';
        this.def1 = 'rum';
        this.chosenRoom = 'Rum (min)';
        this.roomOptions = [1, 2, 3, 4, 5, 6];
        this.title2 = 'Boarea (min)';
        this.def2 = 'kvm';
        this.chosenArea = 'Boarea (min)';
        this.areaOptions = [25, 50, 75, 100, 125, 150, 175, 200];
        this.title3 = 'Pris (min)';
        this.def3 = 'kr';
        this.chosenPriceMin = 'Pris (min)';
        this.priceMinOptions = [500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];
        this.title4 = 'Pris (max)';
        this.chosenPriceMax = 'Pris (max)';
        this.priceMaxOptions = [500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];
        // ESTATE-VIEW VARIABLES
        this.estates = [];
        this.sortHeader = 'Sortera Efter:';
        this.viewMode = '-date_added';
        this.dropdownTitle = 'Senaste inlagt';
        this.options = [
            { text: 'Senaste inlagt', sorting: '-date_added' },
            { text: 'Högst Pris', sorting: '-price' },
            { text: 'Lägst Pris', sorting: 'price' }
        ];
        this.saleTag = "Såld";
        this.tags = ['rum och kök', 'kvm', 'Budstart:', 'Inlagd den', 'Mer Info'];
        this.localMem = memService.get(this);
    }
    EstateMasterComponent.prototype.roomChoice = function (noOfRooms) {
        if (noOfRooms === 0) {
            this.chosenRoom = 'Rum (min)';
        }
        else {
            this.chosenRoom = noOfRooms + ' rum';
        }
    };
    EstateMasterComponent.prototype.areaChoice = function (noOfAreas) {
        if (noOfAreas === 0) {
            this.chosenArea = 'Boarea (min)';
        }
        else {
            this.chosenArea = noOfAreas + ' kvm';
        }
    };
    EstateMasterComponent.prototype.priceMinChoice = function (noOfPricesMin) {
        if (noOfPricesMin === 0) {
            this.chosenPriceMin = 'Pris (min)';
        }
        else {
            this.chosenPriceMin = noOfPricesMin + ' kr';
        }
    };
    EstateMasterComponent.prototype.priceMaxChoice = function (noOfPricesMax) {
        if (noOfPricesMax === 0) {
            this.chosenPriceMax = 'Pris (min)';
        }
        else {
            this.chosenPriceMax = noOfPricesMax + ' kr';
        }
    };
    EstateMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Estates = this.restService.newRestEntity("estate");
        Estates.find('').then(function (data) {
            _this.estates = data;
        });
    };
    return EstateMasterComponent;
}());
EstateMasterComponent = __decorate([
    core_1.Component({
        selector: 'estate-master',
        templateUrl: './estate-master.html',
        styleUrls: ['./estate-master.css']
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService,
        mem_service_1.MemService])
], EstateMasterComponent);
exports.EstateMasterComponent = EstateMasterComponent;
//# sourceMappingURL=estate-master.component.js.map