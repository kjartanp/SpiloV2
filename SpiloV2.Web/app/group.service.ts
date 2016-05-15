import { Group } from './group';
import { GROUPS } from './mock-groups';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {
	getGroups() {
		return Promise.resolve(GROUPS);
	}

	// See the "Take it slow" appendix
	getGroupsSlowly() {
		return new Promise<Group[]>(resolve =>
			setTimeout(() => resolve(GROUPS), 2000) // 2 seconds
		);
	}

	getGroup(id: number) {
		return Promise.resolve(GROUPS).then(
			heroes => heroes.filter(group => group.id === id)[0]
		);
	}
}