"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var front_page_component_1 = require("./front-page/front-page.component");
var sell_page_component_1 = require("./sell-page/sell-page.component");
var buy_page_component_1 = require("./buy-page/buy-page.component");
var detailed_buy_page_component_1 = require("./buy-page/detailed-buy-page.component");
var about_us_component_1 = require("./about-us/about-us.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var routes = [
    {
        path: '',
        redirectTo: '/front-page',
        pathMatch: 'full'
    },
    {
        path: 'front-page',
        component: front_page_component_1.FrontPageComponent
    },
    {
        path: 'sell-page',
        component: sell_page_component_1.SellPageComponent
    },
    {
        path: 'buy-page',
        component: buy_page_component_1.BuyPageComponent
    },
    {
        path: 'buy-page/detail',
        component: detailed_buy_page_component_1.DetailedBuyPageComponent
    },
    {
        path: 'about-us',
        component: about_us_component_1.AboutUsComponent
    },
    {
        path: 'contact-us',
        component: contact_us_component_1.ContactUsComponent
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map