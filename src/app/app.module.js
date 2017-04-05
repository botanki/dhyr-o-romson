"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var front_page_component_1 = require("./front-page/front-page.component");
var navigation_component_1 = require("./navigation/navigation.component");
var sell_page_component_1 = require("./sell-page/sell-page.component");
var buy_page_component_1 = require("./buy-page/buy-page.component");
var detailed_buy_page_component_1 = require("./buy-page/detailed-buy-page.component");
var about_us_component_1 = require("./about-us/about-us.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var footer_component_1 = require("./footer/footer.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routing_module_1.AppRoutingModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            front_page_component_1.FrontPageComponent,
            navigation_component_1.NavigationComponent,
            sell_page_component_1.SellPageComponent,
            buy_page_component_1.BuyPageComponent,
            detailed_buy_page_component_1.DetailedBuyPageComponent,
            about_us_component_1.AboutUsComponent,
            contact_us_component_1.ContactUsComponent,
            footer_component_1.FooterComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map