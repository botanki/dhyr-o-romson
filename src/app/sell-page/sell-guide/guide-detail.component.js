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
var GuideDetailComponent = (function () {
    function GuideDetailComponent(restService, route, location) {
        this.restService = restService;
        this.route = route;
        this.guide = [];
        this.guides = [];
        this.location = location;
    }
    GuideDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            var Guides = _this.restService.newRestEntity("guide");
            Guides.find('').then(function (guides) {
                var id = routeParams.id;
                for (var guide in guides) {
                    for (var _i = 0, guides_1 = guides; _i < guides_1.length; _i++) {
                        var guide_1 = guides_1[_i];
                        if (guide_1.id == id) {
                            _this.guide = guide_1;
                        }
                    }
                }
            });
        });
    };
    GuideDetailComponent.prototype.backClicked = function () {
        this.location.back();
    };
    return GuideDetailComponent;
}());
GuideDetailComponent = __decorate([
    core_1.Component({
        selector: 'guide-detail',
        templateUrl: './guide-detail.html',
        styleUrls: ['./guide-detail.css'],
        providers: [rest_service_1.RestService, common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }]
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService,
        router_1.ActivatedRoute,
        common_1.Location])
], GuideDetailComponent);
exports.GuideDetailComponent = GuideDetailComponent;
//# sourceMappingURL=guide-detail.component.js.map