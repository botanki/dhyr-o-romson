"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FilterComponent = (function () {
    function FilterComponent() {
        this.header = 'Filtera:';
        // Rum (min)
        this.title1 = 'Rum (min)';
        this.def1 = 'rum';
        this.chosenRoom = 'Rum (min)';
        this.roomOptions = [1, 2, 3, 4, 5, 6];
        // Boarea (min)
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
    }
    FilterComponent.prototype.roomChoice = function (noOfRooms) {
        if (noOfRooms === 0) {
            this.chosenRoom = 'Rum (min)';
        }
        else {
            this.chosenRoom = noOfRooms + ' rum';
        }
    };
    FilterComponent.prototype.areaChoice = function (noOfAreas) {
        if (noOfAreas === 0) {
            this.chosenArea = 'Boarea (min)';
        }
        else {
            this.chosenArea = noOfAreas + ' kvm';
        }
    };
    FilterComponent.prototype.priceMinChoice = function (noOfPricesMin) {
        if (noOfPricesMin === 0) {
            this.chosenPriceMin = 'Pris (min)';
        }
        else {
            this.chosenPriceMin = noOfPricesMin + ' kr';
        }
    };
    FilterComponent.prototype.priceMaxChoice = function (noOfPricesMax) {
        if (noOfPricesMax === 0) {
            this.chosenPriceMax = 'Pris (min)';
        }
        else {
            this.chosenPriceMax = noOfPricesMax + ' kr';
        }
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    core_1.Component({
        selector: 'filter',
        templateUrl: './filter.html',
        styleUrls: ['./filter.css']
    })
], FilterComponent);
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map