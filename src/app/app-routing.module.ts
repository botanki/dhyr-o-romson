import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent }  from './front-page/front-page.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { EstateMasterComponent } from './buy-page/estates/estate-master.component';
import { EstateDetailComponent } from './buy-page/estates/estate-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './pagenotfound.component';

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
        path: 'estate/:id',
        component: EstateDetailComponent
	},
	{
        path: 'buy-page',
        component: EstateMasterComponent
	},
	{
		path: 'about-us',
		component: AboutUsComponent
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
