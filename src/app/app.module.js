"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var front_page_component_1 = require("./front-page/front-page.component");
var navigation_component_1 = require("./navigation/navigation.component");
var sell_page_component_1 = require("./sell-page/sell-page.component");
var guide_detail_component_1 = require("./sell-page/sell-guide/guide-detail.component");
var guide_master_component_1 = require("./sell-page/sell-guide/guide-master.component");
var guide_pager_component_1 = require("./sell-page/sell-guide/guide-pager.component");
var buy_page_component_1 = require("./buy-page/buy-page.component");
var search_component_1 = require("./buy-page/filtering/search.component");
var filter_component_1 = require("./buy-page/filtering/filter.component");
var estate_master_component_1 = require("./buy-page/estates/estate-master.component");
var estate_detail_component_1 = require("./buy-page/estates/estate-detail.component");
var about_us_component_1 = require("./about-us/about-us.component");
var footer_component_1 = require("./footer/footer.component");
var pagenotfound_component_1 = require("./pagenotfound.component");
var broker_master_component_1 = require("./about-us/brokers/broker-master.component");
var modal_component_1 = require("./modal/modal.component");
var rest_service_1 = require("./services/rest.service");
var mem_service_1 = require("./services/mem.service");
//import classes here?
var break_row_pipe_1 = require("./pipes/break-row.pipe");
var order_by_pipe_1 = require("./pipes/order-by.pipe");
var spacing_currency_pipe_1 = require("./pipes/spacing-currency.pipe");
var swedish_date_pipe_1 = require("./pipes/swedish-date.pipe");
var date_count_pipe_1 = require("./pipes/date-count.pipe");
var phone_format_pipe_1 = require("./pipes/phone-format.pipe");
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
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            front_page_component_1.FrontPageComponent,
            navigation_component_1.NavigationComponent,
            sell_page_component_1.SellPageComponent,
            guide_detail_component_1.GuideDetailComponent,
            guide_master_component_1.GuideMasterComponent,
            guide_pager_component_1.GuidePagerComponent,
            buy_page_component_1.BuyPageComponent,
            search_component_1.SearchComponent,
            filter_component_1.FilterComponent,
            estate_master_component_1.EstateMasterComponent,
            estate_detail_component_1.EstateDetailComponent,
            about_us_component_1.AboutUsComponent,
            footer_component_1.FooterComponent,
            pagenotfound_component_1.PageNotFoundComponent,
            modal_component_1.NgbdModalBasic,
            broker_master_component_1.BrokerMasterComponent,
            break_row_pipe_1.BreakRowPipe,
            order_by_pipe_1.OrderByPipe,
            spacing_currency_pipe_1.SpacingCurrencyPipe,
            swedish_date_pipe_1.SwedishDatePipe,
            date_count_pipe_1.DateCountPipe,
            phone_format_pipe_1.PhoneFormatPipe
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            rest_service_1.RestService,
            mem_service_1.MemService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map