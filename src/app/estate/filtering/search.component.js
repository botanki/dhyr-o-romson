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
var SearchComponent = (function () {
    //searchFilters: any;
    function SearchComponent(restService, memService) {
        var _this = this;
        this.restService = restService;
        this.memService = memService;
        this.estate = [];
        this.searchPhrase = '';
        this.localMem = memService.get(this);
        this.global = this.memService.global();
        this.global.updateSearchFilters = function (filters) {
            _this.searchFilters = filters;
            _this.searchFromForm();
        };
        this.searchPhrase = this.localMem.searchPhrase || '';
    }
    SearchComponent.prototype.filtersToMongo = function () {
        if (!this.searchFilters) {
            this.searchFilters = {
                chosenArea: 'x',
                chosenRoom: 'x',
                chosenPriceMin: 'x',
                chosenPriceMax: 'x'
            };
        }
        var s = this.searchFilters;
        var query = [
            isNaN(s.chosenArea.split(' ')[0] / 1) ? undefined : { space: { $gte: s.chosenArea.split(' ')[0] / 1 } },
            isNaN(s.chosenRoom.split(' ')[0] / 1) ? undefined : { rooms: { $gte: s.chosenRoom.split(' ')[0] / 1 } },
            isNaN(s.chosenPriceMin.split(' ')[0] / 1) ? undefined : { price: { $gte: s.chosenPriceMin.split(' ')[0] / 1 } },
            isNaN(s.chosenPriceMax.split(' ')[0] / 1) ? undefined : { price: { $lte: s.chosenPriceMax.split(' ')[0] / 1 } }
        ];
        // Delete items that are undefined (no good number value)
        return query.filter(function (item) {
            return item ? true : false;
        });
    };
    SearchComponent.prototype.searchFromForm = function () {
        this.localMem.searchPhrase = this.searchPhrase;
        this.search(this.searchPhrase);
    };
    SearchComponent.prototype.search = function (term) {
        var _this = this;
        term = term.trim(); // ta bort spaces före/efter texten
        var properties = {
            $or: [
                { area: { $regex: term, $options: "i" } },
                { address: { $regex: term, $options: "i" } }
            ],
            $and: this.filtersToMongo(),
            _fields: '',
            _skip: 0,
            _limit: 100
        };
        if (properties.$and.length === 0) {
            delete properties.$and;
        }
        var Estates = this.restService.newRestEntity("estate");
        //console.log(properties,"SENDING TO SERVER");
        Estates.find('find/' + JSON.stringify(properties)).then(function (data) {
            _this.estate = data;
            _this.global.estateMasterUpdate(data);
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './search.html',
        styleUrls: ['./search.css'],
        providers: [rest_service_1.RestService, mem_service_1.MemService]
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService,
        mem_service_1.MemService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map