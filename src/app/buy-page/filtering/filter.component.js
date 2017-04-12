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
        // Rum (min)
        this.chosenRoom = 'Rum (min)';
        this.roomOptions = [1, 2, 3, 4, 5, 6];
        // Boarea (min)
        this.chosenArea = 'Boarea (min)';
        this.areaOptions = [25, 50, 75, 100, 125, 150, 175, 200];
        //Pris (min)
        this.chosenPriceMin = 'Pris (min)';
        this.priceMinOptions = [250000, 500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000];
        this.chosenPriceMax = 'Pris (max)';
        this.priceMaxOptions = [250000, 500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000];
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