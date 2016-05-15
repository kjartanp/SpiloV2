import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
	selector: 'my-groups',
	templateUrl: 'app/groups.component.html',
	styleUrls: ['app/groups.component.css']
})
export class GroupsComponent implements OnInit {
	groups: Group[];
	selectedHero: Group;

	constructor(
		private router: Router,
		private groupService: GroupService) { }

	getGroups() {
		this.groupService.getGroups().then(groups => this.groups = groups);
	}

	ngOnInit() {
		this.getGroups();
	}

}