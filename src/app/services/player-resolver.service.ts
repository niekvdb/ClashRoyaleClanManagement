import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Player } from '../models/player';

@Injectable()
export class PlayerResolver implements Resolve<Player> {
    private tag: string = "";
    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        this.route.params.subscribe(params => {
            this.tag = route.params['tag'];

        });

        return this.dataService.getPlayer(this.tag).pipe(map(player => {
            if (player) {
               
                return player;
            } else {
                this.router.navigate(['/home']);
                return null;
            }
        }));

       
    }
}