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
        this.tags = ['rum och kök', 'kvm', 'Budstart:', 'Inlagd: ', 'Mer Info'];
        this.localMem = memService.get(this);
        // Set sort option when we "return" to this page
        this.dropdownTitle = this.localMem.currentSortOptionLabel || 'Senaste inlagt';
        this.viewMode = this.localMem.currentSortOption || '-date_added';
    }
    EstateMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Estates = this.restService.newRestEntity("estate");
        Estates.find('').then(function (data) {
            _this.estates = data;
        });
    };
    EstateMasterComponent.prototype.saveSortOption = function (label, choice) {
        this.localMem.currentSortOptionLabel = label;
        this.localMem.currentSortOption = choice;
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