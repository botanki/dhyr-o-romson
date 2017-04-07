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
var router_1 = require("@angular/router");
var rest_service_1 = require("../../services/rest.service");
var EstateDetailComponent = (function () {
    function EstateDetailComponent(restService, route) {
        this.restService = restService;
        this.route = route;
        this.estate = {};
    }
    EstateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            var Estates = _this.restService.newRestEntity("estates");
            Estates.find('').then(function (estates) {
                var name = routeParams.name;
                for (var category in estates) {
                    for (var _i = 0, _a = estates[category]; _i < _a.length; _i++) {
                        var estate = _a[_i];
                        if (estate.name == name) {
                            _this.estate = estate;
                        }
                    }
                }
            });
        });
    };
    return EstateDetailComponent;
}());
EstateDetailComponent = __decorate([
    core_1.Component({
        selector: 'estate-detail',
        templateUrl: './estate-detail.html',
        styleUrls: ['./estate-detail.css'],
        providers: [rest_service_1.RestService]
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService,
        router_1.ActivatedRoute])
], EstateDetailComponent);
exports.EstateDetailComponent = EstateDetailComponent;
//# sourceMappingURL=estate-detail.component.js.map