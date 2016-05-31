import { Group } from './group';
import { GROUPS } from './mock-groups';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {
	getGroups() {
		return Promise.resolve(GROUPS);
	}
}