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
var mem_service_1 = require("../../services/mem.service");
var EstateDetailComponent = (function () {
    function EstateDetailComponent(restService, route, memService, location) {
        this.restService = restService;
        this.route = route;
        this.memService = memService;
        this.estate = [];
        this.breadcrumbs = ['Hem', 'Köp Bostad'];
        this.tags = [
            'Rum:',
            'rum och kök',
            'Boarea:',
            'kvm',
            'Byggnadsår:',
            'Föreslagen budstart:',
            'kr',
            'Nästa Visning:',
            'Anmäl Intresse',
            'Se fler bostäder',
            'Ansvarig Mäklare:',
            'Tel: ',
            'Kontakta:',
            'Tilllagd:'
        ];
        this.sale = "Såld";
        this.location = location;
        this.globalMem = this.memService.global();
    }
    EstateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            var Estates = _this.restService.newRestEntity("estate");
            Estates.find('').then(function (estates) {
                var id = routeParams.id;
                for (var estate in estates) {
                    for (var _i = 0, estates_1 = estates; _i < estates_1.length; _i++) {
                        var estate_1 = estates_1[_i];
                        if (estate_1.id == id) {
                            _this.estate = estate_1;
                        }
                    }
                }
            });
        });
    };
    EstateDetailComponent.prototype.backClicked = function () {
        this.location.back();
    };
    return EstateDetailComponent;
}());
EstateDetailComponent = __decorate([
    core_1.Component({
        selector: 'estate-detail',
        templateUrl: './estate-detail.html',
        styleUrls: ['./estate-detail.css'],
        providers: [mem_service_1.MemService, rest_service_1.RestService, common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }]
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService,
        router_1.ActivatedRoute,
        mem_service_1.MemService,
        common_1.Location])
], EstateDetailComponent);
exports.EstateDetailComponent = EstateDetailComponent;
//# sourceMappingURL=estate-detail.component.js.map