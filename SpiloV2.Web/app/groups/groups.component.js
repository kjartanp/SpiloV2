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
const group_service_1 = require('./group.service');
let GroupsComponent = class GroupsComponent {
    constructor(router, groupService) {
        this.router = router;
        this.groupService = groupService;
    }
    getGroups() {
        this.groupService.getGroups().then(groups => this.groups = groups);
    }
    ngOnInit() {
        this.getGroups();
    }
    gotoDetail(group) {
        let link = ['Gametypes', { id: group.id }];
        this.router.navigate(link);
    }
};
GroupsComponent = __decorate([
    core_1.Component({
        selector: 'my-groups',
        templateUrl: 'app/groups/groups.component.html',
        styleUrls: ['app/groups/groups.component.css']
    }), 
    __metadata('design:paramtypes', [router_deprecated_1.Router, group_service_1.GroupService])
], GroupsComponent);
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map