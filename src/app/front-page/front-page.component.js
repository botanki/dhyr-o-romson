"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FrontPageComponent = (function () {
    function FrontPageComponent() {
        this.backgroundImage = 'url(../images/headers/front.png)';
        this.slogan = 'De dyraste rummen...';
        this.buttons = {
            sell: 'Vill du sälja din bostad?',
            buy: 'Bostäder till salu'
        };
    }
    return FrontPageComponent;
}());
FrontPageComponent = __decorate([
    core_1.Component({
        selector: 'front-page',
        templateUrl: './front-page.html',
        styleUrls: ['./front-page.css']
    })
], FrontPageComponent);
exports.FrontPageComponent = FrontPageComponent;
//# sourceMappingURL=front-page.component.js.map