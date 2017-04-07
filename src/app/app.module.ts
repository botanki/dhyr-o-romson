import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { FrontPageComponent }  from './front-page/front-page.component';
import { NavigationComponent }  from './navigation/navigation.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { EstateMasterComponent } from './buy-page/estates/estate-master.component';
import { EstateDetailComponent } from './buy-page/estates/estate-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent }  from './footer/footer.component';
import { PageNotFoundComponent } from './pagenotfound.component';

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
		BuyPageComponent,
		EstateMasterComponent,
		EstateDetailComponent,
		AboutUsComponent,
		ContactUsComponent,
		FooterComponent,
		PageNotFoundComponent
	],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
