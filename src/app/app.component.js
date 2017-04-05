"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n\t\t<nav>\n\t\t\t<a routerLink=\"/front-page\"\n\t\t\t\trouterLinkActive=\"active\">Framsida</a>\n\n\t\t\t<a routerLink=\"/sell-page\"\n\t\t\t\trouterLinkActive=\"active\">S\u00E4lj</a>\n\n\t\t\t<a routerLink=\"/buy-page\"\n\t\t\t\trouterLinkActive=\"active\">K\u00F6p</a>\n\n\t\t\t<a routerLink=\"/about-us\"\n\t\t\t\trouterLinkActive=\"active\">Om oss</a>\n\n\t\t\t<a routerLink=\"/contact-us\"\n\t\t\t\trouterLinkActive=\"active\">Kontakta oss</a>\n\t\t</nav>\n\n\t\t<router-outlet></router-outlet>\n\t",
        styleUrls: []
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map