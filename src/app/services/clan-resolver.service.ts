import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { Clan } from '../models/clan';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()
export class ClanResolver implements Resolve<Clan> {
  constructor(private dataService: DataService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.dataService.getClan("9OQGG2R").pipe(map(clan => {
      if (clan) {
        return clan;
      } else {
        this.router.navigate(['/home']);
        return null;
      }
    }));
  }
}