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
var search_component_1 = require("./buy-page/search.component");
var filter_component_1 = require("./buy-page/filter.component");
var sort_component_1 = require("./buy-page/sort.component");
var estate_master_component_1 = require("./buy-page/estates/estate-master.component");
var estate_detail_component_1 = require("./buy-page/estates/estate-detail.component");
var about_us_component_1 = require("./about-us/about-us.component");
var footer_component_1 = require("./footer/footer.component");
var pagenotfound_component_1 = require("./pagenotfound.component");
var broker_master_component_1 = require("./about-us/brokers/broker-master.component");
var app_routing_module_1 = require("./app-routing.module");
var modal_component_1 = require("./modal/modal.component");
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
            search_component_1.SearchComponent,
            filter_component_1.FilterComponent,
            sort_component_1.SortComponent,
            estate_master_component_1.EstateMasterComponent,
            estate_detail_component_1.EstateDetailComponent,
            about_us_component_1.AboutUsComponent,
            footer_component_1.FooterComponent,
            pagenotfound_component_1.PageNotFoundComponent,
            modal_component_1.NgbdModalBasic,
            broker_master_component_1.BrokerMasterComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map