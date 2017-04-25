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
var _this = this;
var core_1 = require("@angular/core");
var rest_service_1 = require("./services/rest.service");
var mem_service_1 = require("./services/mem.service");
var SearchComponent = (function () {
    function SearchComponent(restService, memService) {
        this.restService = restService;
        this.memService = memService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (term, sort) {
        term = term.trim(); // ta bort spaces före/efter texten
        var properties = {
            $or: [
                { area: { $regex: term, $options: "i" } },
                { address: { $regex: term, $options: "i" } }
            ],
            _fields: '',
            _sort: sort,
            _skip: 0,
            _limit: 100
        };
        this.sendSearchRequest(properties);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './search.html',
        providers: [rest_service_1.RestService, mem_service_1.MemService]
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService,
        mem_service_1.MemService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
this.restService.get(rest, properties).then(function (data) {
    _this.estates = data;
});
//# sourceMappingURL=search.component.js.map