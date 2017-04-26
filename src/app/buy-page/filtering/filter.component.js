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
var mem_service_1 = require("../../services/mem.service");
var FilterComponent = (function () {
    function FilterComponent(memService) {
        this.memService = memService;
        this.header = 'Filtera:';
        // Rum (min)
        this.title1 = 'Rum (min)';
        this.def1 = 'rum';
        this.chosenRoom = 'Rum (min)';
        this.roomOptions = [1, 2, 3, 4, 5, 6];
        // Boarea (min)
        this.title2 = 'Boarea (min)';
        this.def2 = 'kvm';
        this.chosenArea = 'Boarea (min)';
        this.areaOptions = [25, 50, 75, 100, 125, 150, 175, 200];
        //Pris (min)
        this.title3 = 'Pris (min)';
        this.def3 = 'kr';
        this.chosenPriceMin = 'Pris (min)';
        this.priceMinOptions = [500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];
        //Pris (max)
        this.title4 = 'Pris (max)';
        this.chosenPriceMax = 'Pris (max)';
        this.priceMaxOptions = [500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];
        this.localMem = memService.get(this);
        this.global = this.memService.global();
        this.setFiltersAndContentFromPreviousChoices();
        /*this. = this.localMem.currentFilterOptionLabel || 'Rum (min)';
        this.chosenRoom = this.localMem.currentFilterOption || 'Rum (min)';*/
    }
    FilterComponent.prototype.setFiltersAndContentFromPreviousChoices = function () {
        var f = this.localMem.filters;
        //if(!f){ return; }
        for (var key in f) {
            this[key] = f[key];
        }
        // new search using correct filter settings
        this.global.updateSearchFilters(f);
    };
    FilterComponent.prototype.roomChoice = function (noOfRooms) {
        if (noOfRooms === 0) {
            this.chosenRoom = 'Rum (min)';
        }
        else {
            this.chosenRoom = noOfRooms + ' rum';
        }
        this.filterUpdate();
    };
    FilterComponent.prototype.areaChoice = function (noOfAreas) {
        if (noOfAreas === 0) {
            this.chosenArea = 'Boarea (min)';
        }
        else {
            this.chosenArea = noOfAreas + ' kvm';
        }
        this.filterUpdate();
    };
    FilterComponent.prototype.priceMinChoice = function (noOfPricesMin) {
        if (noOfPricesMin === 0) {
            this.chosenPriceMin = 'Pris (min)';
        }
        else {
            this.chosenPriceMin = noOfPricesMin + ' kr';
        }
        this.filterUpdate();
    };
    FilterComponent.prototype.priceMaxChoice = function (noOfPricesMax) {
        if (noOfPricesMax === 0) {
            this.chosenPriceMax = 'Pris (max)';
        }
        else {
            this.chosenPriceMax = noOfPricesMax + ' kr';
        }
        this.filterUpdate();
    };
    FilterComponent.prototype.filterUpdate = function () {
        var filters = {
            chosenRoom: this.chosenRoom,
            chosenArea: this.chosenArea,
            chosenPriceMin: this.chosenPriceMin,
            chosenPriceMax: this.chosenPriceMax
        };
        // Store in localMem for retrieving after route change
        this.localMem.filters = filters;
        // New search
        this.global.updateSearchFilters(filters);
    };
    FilterComponent.prototype.saveFilterOption = function (label, choice) {
        this.localMem.currentFilterOptionLabel = label;
        this.localMem.currentFilterOption = choice;
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    core_1.Component({
        selector: 'filter',
        templateUrl: './filter.html',
        styleUrls: ['./filter.css'],
        providers: [mem_service_1.MemService]
    }),
    __metadata("design:paramtypes", [mem_service_1.MemService])
], FilterComponent);
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map