import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClanBattle } from '../models/clanBattle';



@Injectable()
export class ClanBattleResolver implements Resolve<ClanBattle> {

    constructor(private dataService: DataService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


        return this.dataService.getClanBattles("9OQGG2R").pipe(map(clanBattles => {
            if (clanBattles) {
                return clanBattles;
            } else {
                this.router.navigate(['/home']);
                return null;
            }
        }));
    }
}