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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rest_service_1 = require("../../services/rest.service");
var SaleGuideDetailComponent = (function () {
    function SaleGuideDetailComponent(restService, route, location) {
        this.restService = restService;
        this.route = route;
        this.guide = {};
        this.guides = {};
        this.location = location;
    }
    SaleGuideDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            var Guides = _this.restService.newRestEntity("guides");
            Guides.find('').then(function (guides) {
                var id = routeParams.id;
                for (var currentGuides in guides) {
                    for (var _i = 0, _a = guides[currentGuides]; _i < _a.length; _i++) {
                        var guide = _a[_i];
                        if (guide.id == id) {
                            _this.guide = guide;
                        }
                    }
                }
            });
        });
    };
    SaleGuideDetailComponent.prototype.backClicked = function () {
        this.location.back();
    };
    return SaleGuideDetailComponent;
}());
SaleGuideDetailComponent = __decorate([
    core_1.Component({
        selector: 'sale-guide-detail',
        templateUrl: './sale-guide-detail.html',
        styleUrls: ['./sale-guide-detail.css'],
        providers: [rest_service_1.RestService, common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }]
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService,
        router_1.ActivatedRoute,
        common_1.Location])
], SaleGuideDetailComponent);
exports.SaleGuideDetailComponent = SaleGuideDetailComponent;
//# sourceMappingURL=sale-guide-detail.component.js.map