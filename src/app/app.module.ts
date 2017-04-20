import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent }  from './app.component';
import { FrontPageComponent }  from './front-page/front-page.component';
import { NavigationComponent }  from './navigation/navigation.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { GuideDetailComponent } from './sell-page/sell-guide/guide-detail.component';
import { GuideMasterComponent } from './sell-page/sell-guide/guide-master.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { SearchComponent } from './buy-page/filtering/search.component';
import { FilterComponent } from './buy-page/filtering/filter.component';
import { EstateMasterComponent } from './buy-page/estates/estate-master.component';
import { EstateDetailComponent } from './buy-page/estates/estate-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent }  from './footer/footer.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { BrokerMasterComponent } from './about-us/brokers/broker-master.component'
import { NgbdModalBasic } from './modal/modal.component';
import { RestService } from './services/rest.service';
import { MemService } from './services/mem.service';

//import classes here?

import { BreakRowPipe } from './pipes/break-row.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SpacingCurrencyPipe } from './pipes/spacing-currency.pipe';
import { SwedishDatePipe } from './pipes/swedish-date.pipe';
import { PhonePipe } from './pipes/phone-format.pipe';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpModule,
		NgbModule.forRoot()
	],
	declarations: [
		AppComponent,
		FrontPageComponent,
		NavigationComponent,
		SellPageComponent,
		GuideDetailComponent,
		GuideMasterComponent,
		BuyPageComponent,
		SearchComponent,
		FilterComponent,
		EstateMasterComponent,
		EstateDetailComponent,
		AboutUsComponent,
		FooterComponent,
		PageNotFoundComponent,
		NgbdModalBasic,
		BrokerMasterComponent,
		BreakRowPipe,
		OrderByPipe,
		SpacingCurrencyPipe,
        SwedishDatePipe,
        PhonePipe
	],
  	bootstrap: [
  		AppComponent
  	],
  	providers: [
    	RestService,
    	MemService
  	]
})

export class AppModule { }
