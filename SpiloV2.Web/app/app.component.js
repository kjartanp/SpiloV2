"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_deprecated_1 = require('@angular/router-deprecated');
const hero_service_1 = require('./heros/hero.service');
const group_service_1 = require('./groups/group.service');
const gametype_service_1 = require('./gametypes/gametype.service');
const dashboard_component_1 = require('./dashboard/dashboard.component');
const heroes_component_1 = require('./heros/heroes.component');
const hero_detail_component_1 = require('./heros/hero-detail.component');
const groups_component_1 = require('./groups/groups.component');
const gametypes_component_1 = require('./gametypes/gametypes.component');
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Tour of Heroes';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        providers: [
            router_deprecated_1.ROUTER_PROVIDERS,
            hero_service_1.HeroService,
            group_service_1.GroupService,
            gametype_service_1.GametypeService
        ]
    }),
    router_deprecated_1.RouteConfig([
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: dashboard_component_1.DashboardComponent
        },
        {
            path: '/detail/:id',
            name: 'HeroDetail',
            component: hero_detail_component_1.HeroDetailComponent
        },
        {
            path: '/heroes',
            name: 'Heroes',
            component: heroes_component_1.HeroesComponent
        },
        {
            path: '',
            name: 'Groups',
            component: groups_component_1.GroupsComponent,
            useAsDefault: true
        },
        {
            path: '/gametypes/:id',
            name: 'Gametypes',
            component: gametypes_component_1.GametypesComponent
        }
    ]), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map