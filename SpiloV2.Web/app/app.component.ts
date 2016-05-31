import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroService } from './heros/hero.service';
import { GroupService } from './groups/group.service';
import { GametypeService } from './gametypes/gametype.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heros/heroes.component';
import { HeroDetailComponent } from './heros/hero-detail.component';
import { GroupsComponent } from './groups/groups.component';
import { GametypesComponent } from './gametypes/gametypes.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HeroService,
		GroupService,
		GametypeService
	]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent
		
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '',
		name: 'Groups',
		component: GroupsComponent,
		useAsDefault: true
	},
	{
		path: '/gametypes/:id',
		name: 'Gametypes',
		component: GametypesComponent
	}
])
export class AppComponent {
	title = 'Tour of Heroes';
}