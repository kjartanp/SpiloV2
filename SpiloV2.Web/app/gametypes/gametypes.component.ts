import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { GametypeService} from './gametype.service';
import { Gametype } from './gametype';

@Component({
	selector: 'my-gametypes',
	templateUrl: 'app/gametypes/gametypes.component.html'
})
export class GametypesComponent implements OnInit {
	gametypes: Gametype[];
	constructor(
		private routeParams: RouteParams,
		private gametypeService: GametypeService) { }

	getGametypes() {
		this.gametypeService.getGameTypes(1).then(gameTypes => this.gametypes = gameTypes);
	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.getGametypes();
	}

	goBack() {
		window.history.back();
	}
}