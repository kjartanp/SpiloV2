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
const mock_groups_1 = require('./mock-groups');
const core_1 = require('@angular/core');
let GroupService = class GroupService {
    getGroups() {
        return Promise.resolve(mock_groups_1.GROUPS);
    }
    getGroupsSlowly() {
        return new Promise(resolve => setTimeout(() => resolve(mock_groups_1.GROUPS), 2000));
    }
    getGroup(id) {
        return Promise.resolve(mock_groups_1.GROUPS).then(heroes => heroes.filter(group => group.id === id)[0]);
    }
};
GroupService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map