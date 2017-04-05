import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent }  from './front-page/front-page.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { DetailedBuyPageComponent } from './buy-page/detailed-buy-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/front-page',
		pathMatch: 'full'
	},
	{
		path: 'front-page',
		component: FrontPageComponent
	},
	{
		path: 'sell-page',
		component: SellPageComponent
	},
	{
		path: 'buy-page',
		component: BuyPageComponent
	},
	{
		path: 'buy-page/detail',
		component: DetailedBuyPageComponent
	},
	{
		path: 'about-us',
		component: AboutUsComponent
	},
	{
		path: 'contact-us',
		component: ContactUsComponent
	},

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
