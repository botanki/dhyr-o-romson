"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FooterComponent = (function () {
    function FooterComponent() {
        this.company = 'Dhyr & Rumson';
        this.image = 'logo_footer.png';
        this.contact = { phone: '076-890 87 67', address: 'Almbackgatan 16 Malmö', email: 'info@dhyrrumson.se' };
        this.links = [
            { name: 'facebook', url: 'http://www.facebook.com/dhyrandrumson', iconname: 'facebook-square' },
            { name: 'twitter', url: 'http://www.twitter.com/dhyrandrumson', iconname: 'twitter-square' },
            { name: 'linkedin', url: 'http://www.linkedin.com/dhyrandrumson', iconname: 'linkedin-square' },
            { name: 'instagram', url: 'http://www.instagram.com/dhyrandrumson', iconname: 'instagram' }
        ];
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer',
        templateUrl: './footer.html',
        styleUrls: ['./footer.css']
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map