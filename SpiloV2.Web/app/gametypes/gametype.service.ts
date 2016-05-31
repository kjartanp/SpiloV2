import { Gametype } from './gametype';
import { GAMETYPES } from './mock-gametypes';
import { Injectable } from '@angular/core';

@Injectable()
export class GametypeService {
	getGameTypes(id:number) {
		return Promise.resolve(GAMETYPES);
	}
}