import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent }  from './front-page/front-page.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { EstateComponent } from './estate/estate.component';
import { GuideDetailComponent } from './sell-page/sell-guide/guide-detail.component';;
import { EstateDetailComponent } from './estate/estates/estate-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
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
		path: 'guide',
		component: SellPageComponent
	},
	{
		path: 'guide/:id',
		component: GuideDetailComponent
	},
	{
		path: 'estate',
		component: EstateComponent
	},
	{
        path: 'estate/:id',
        component: EstateDetailComponent
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
